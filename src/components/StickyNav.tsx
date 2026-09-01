import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { TradeButton } from "@/components/TradeButton";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";
import { useTranslation } from "react-i18next";

type StickyNavProps = {
  visible: boolean;
  locale: Locale;
  onSelectLocale: (id: string) => void;
  localeOpen: boolean;
  onLocaleOpenChange: (open: boolean) => void;
};

export function StickyNav({
  visible,
  locale,
  onSelectLocale,
  localeOpen,
  onLocaleOpenChange,
}: StickyNavProps) {
  const { t } = useTranslation();
  const links = [
    { href: "#sourcing", label: t("nav.links.sourcing") },
    { href: "#route", label: t("nav.links.route") },
    { href: "#manifest", label: t("nav.links.spec") },
    { href: "#faq", label: t("nav.links.faq") },
  ];

  return (
    <div
      className={cn(
        "border-banana/28 fixed inset-x-0 top-0 z-60 border-b bg-[rgba(31,58,46,0.94)] backdrop-blur-[10px] transition-[opacity,transform] duration-350 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0",
      )}
    >
      <nav className="mx-auto flex min-h-14 max-w-[1080px] flex-wrap items-center justify-between gap-x-[18px] gap-y-3 px-5 py-2.5">
        <a
          href="#top"
          className="text-banana flex items-center gap-2.5 font-mono text-[11px] tracking-[0.16em] uppercase"
        >
          <span
            aria-hidden="true"
            className="bg-banana inline-block size-[7px] rounded-full"
          />
          {t("nav.brand")}
        </a>

        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-2.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-paper/72 hover:text-banana font-mono text-[11px] tracking-[0.12em] uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}

          <LocaleSwitcher
            variant="nav"
            locale={locale}
            onSelect={onSelectLocale}
            open={localeOpen}
            onOpenChange={onLocaleOpenChange}
          />

          <TradeButton asChild tone="solid" size="sm">
            <a href="#contact">{t("nav.quote")}</a>
          </TradeButton>
        </div>
      </nav>
    </div>
  );
}
