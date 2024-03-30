"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal >
                        <h1 className="text-5xl font-semibold">
                            Una seña
                            <span className="block degradedBlue bg-blueLight">
                               al alcance
                            </span>
                            de tu voz
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Convierte tu voz en gestos claros y comprensibles
                         al instante, eliminando las barreras de comunicación. Únete a nosotros para crear un
                          mundo más inclusivo y conectado.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Registrate ahora</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/Bienveni.gif" alt="Card" width={850} height={950} className="h-auto w-72 md:w-full" />
                </MotionTransition>
             
                <div className="border-[#eeecec] border-[1px] my-7" />
            </div>
           
        </div>
    )
}
