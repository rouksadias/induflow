import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function TopBar() {
  return (
    <div className="hidden bg-deep text-xs text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <p>{siteConfig.topBarMessage}</p>
        <div className="flex items-center gap-5">
          <a href={siteConfig.phoneHref} className="flex items-center gap-1.5 hover:text-safety">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-safety">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-safety"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
