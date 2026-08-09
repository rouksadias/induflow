import { Pool } from "pg";

declare global {
  var _induflowPgPool: Pool | undefined;
}

export const pool =
  globalThis._induflowPgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  globalThis._induflowPgPool = pool;
}

let tableReady: Promise<void> | null = null;

function ensureQuoteRequestsTable(): Promise<void> {
  if (!tableReady) {
    tableReady = pool
      .query(
        `CREATE TABLE IF NOT EXISTS quote_requests (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          company TEXT,
          phone TEXT NOT NULL,
          email TEXT NOT NULL,
          category TEXT,
          product TEXT,
          quantity TEXT,
          message TEXT,
          attachment_name TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );`
      )
      .then(() => undefined);
  }
  return tableReady;
}

export interface QuoteRequestRecord {
  name: string;
  company?: string;
  phone: string;
  email: string;
  category?: string;
  product?: string;
  quantity?: string;
  message?: string;
  attachmentName?: string;
}

export async function insertQuoteRequest(data: QuoteRequestRecord) {
  await ensureQuoteRequestsTable();
  const result = await pool.query(
    `INSERT INTO quote_requests
      (name, company, phone, email, category, product, quantity, message, attachment_name)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
     RETURNING id, created_at`,
    [
      data.name,
      data.company ?? null,
      data.phone,
      data.email,
      data.category ?? null,
      data.product ?? null,
      data.quantity ?? null,
      data.message ?? null,
      data.attachmentName ?? null,
    ]
  );
  return result.rows[0] as { id: number; created_at: string };
}
