import { Button } from "@/components/ui/button";
import { whatsAppLink } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function WhatsAppIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.2 14.2c-.22.6-1.28 1.17-1.77 1.24-.45.07-1.03.1-1.66-.1-.38-.12-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.5-3.98-.13-.18-1.08-1.44-1.08-2.75 0-1.3.68-1.94.92-2.2.24-.27.53-.33.7-.33h.5c.16 0 .38-.06.6.45.22.53.75 1.83.82 1.96.07.13.11.29.02.47-.09.18-.14.29-.27.44-.13.16-.28.35-.4.47-.13.13-.27.27-.12.53.15.27.68 1.12 1.46 1.82 1 .89 1.85 1.17 2.11 1.3.27.13.42.11.58-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.27.13.44.2.5.31.07.11.07.65-.15 1.24Z" />
    </svg>
  );
}

/** Collapses to an icon-only circle below the 700px breakpoint. */
export function WhatsAppFab() {
  const { t } = useTranslation();

  return (
    <Button
      asChild
      variant="ghost"
      className="bg-banana text-leaf hover:bg-banana hover:text-leaf fixed right-4 bottom-4 z-70 size-14 rounded-full p-0 font-mono text-[13px] font-semibold tracking-[0.03em] shadow-[0_6px_18px_rgba(22,36,28,0.35)] transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(22,36,28,0.45)] min-[700px]:right-5 min-[700px]:bottom-5 min-[700px]:h-auto min-[700px]:w-auto min-[700px]:gap-2 min-[700px]:px-5 min-[700px]:py-3.5"
    >
      <a
        href={whatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("fab.ariaLabel")}
      >
        <WhatsAppIcon className="size-4 shrink-0" />
        <span className="hidden min-[700px]:inline">{t("fab.label")}</span>
      </a>
    </Button>
  );
}
