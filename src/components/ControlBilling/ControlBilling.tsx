import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import Link from "next/link"

export function ControlBilling() {
    return (
        <div>
        <div className="p-4 py-20 md:py-64">
              <BackgroundRadialLeft />
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition className="flex-1 p-8 md:p-9">
                    <Image src="/assets/coard.png" alt="Control Business" width="800" height={411} className="w-full h-auto" />
                    
                </MotionTransition>
                
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            Descarga nuestra aplicación movil
                        </h2>
                        
                    </Reveal>
                    
                    <Reveal>
                        <p className="max-w-md mt-10">Accede de manera rapida y sencilla al traductor desde tu dispositivo movil Android.
                       </p>
                       
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Descargala ahora</Link>
                        </div>
                    </Reveal>
                    
                    <div className="border-[#eeecec] border-[1px] my-7" />
                </div>
                
            </div>
            
        </div>
        </div>
    )
}
