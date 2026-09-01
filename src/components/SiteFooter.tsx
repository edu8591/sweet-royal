import { useTranslation } from "react-i18next";

export function SiteFooter() {
  const { t } = useTranslation();

  /* The deep bottom padding is deliberate clearance for the WhatsApp FAB. */
  return (
    <footer className="text-footer px-6 pt-[34px] pb-26 text-center font-mono text-[11px] tracking-[0.08em] uppercase">
      {t("footer.text")}
    </footer>
  );
}
