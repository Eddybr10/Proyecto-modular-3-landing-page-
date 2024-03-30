
import { ControlBilling } from "@/components/ControlBilling";
import { Movil } from "@/components/Movil";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { Grabador } from "@/components/Grabador";



export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />        
      <ControlBilling />
      <Movil/>
      <Grabador/>

      <Footer />
     
    </>
  )
}
