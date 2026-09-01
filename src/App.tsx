import { useState } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { StickyNav } from "@/components/StickyNav";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { CredentialsMarquee } from "@/components/sections/CredentialsMarquee";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { GrowerStandards } from "@/components/sections/GrowerStandards";
import { Hero } from "@/components/sections/Hero";
import { RouteToPort } from "@/components/sections/RouteToPort";
import { SourcingModel } from "@/components/sections/SourcingModel";
import { SpecSheet } from "@/components/sections/SpecSheet";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { useScrollDriver } from "@/hooks/useScrollDriver";
import { LOCALES } from "./constants/locales";

function App() {
  const { navVisible, photoRef } = useScrollDriver();

  // Display-only: the switcher changes its own label, nothing else.
  const [localeId, setLocaleId] = useState(LOCALES[0].id);
  // The two switchers share a selection but only one menu opens at a time.
  const [openMenu, setOpenMenu] = useState<"hero" | "nav" | null>(null);

  const locale = LOCALES.find((item) => item.id === localeId) ?? LOCALES[0];

  return (
    <>
      <StickyNav
        visible={navVisible}
        locale={locale}
        onSelectLocale={setLocaleId}
        localeOpen={openMenu === "nav"}
        onLocaleOpenChange={(open) => setOpenMenu(open ? "nav" : null)}
      />
      <Hero
        photoRef={photoRef}
        locale={locale}
        onSelectLocale={setLocaleId}
        localeOpen={openMenu === "hero"}
        onLocaleOpenChange={(open) => setOpenMenu(open ? "hero" : null)}
      />
      <CredentialsMarquee />
      <main>
        <StatsStrip />
        <SourcingModel />
        <RouteToPort />
        <SpecSheet />
        <GrowerStandards />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}

export default App;
