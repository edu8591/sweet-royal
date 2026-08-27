import { SiteFooter } from "@/components/SiteFooter"
import { WhatsAppFab } from "@/components/WhatsAppFab"
import { Contact } from "@/components/sections/Contact"
import { GrowerStandards } from "@/components/sections/GrowerStandards"
import { Hero } from "@/components/sections/Hero"
import { SourcingModel } from "@/components/sections/SourcingModel"
import { SpecSheet } from "@/components/sections/SpecSheet"

function App() {
  return (
    <>
      <Hero />
      <main>
        <SourcingModel />
        <SpecSheet />
        <GrowerStandards />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}

export default App
