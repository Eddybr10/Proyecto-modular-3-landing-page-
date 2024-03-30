"use client"
import Link from "next/link"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function Movil() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal >
                        <h1 className="text-5xl font-semibold">
                            Usa nuestra pagina web
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Explora nuestra página web,
                        Desde grabar tus propias señas personalizadas hasta utilizar nuestro traductor integrado, 
                        y además, acceder al historial completo de tus traducciones. Únete a nosotros y descubre 
                        cómo estamos construyendo un mundo más inclusivo y conectado.  </p>
                    </Reveal> 
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Iniciar sesión</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/coard2.png" alt="Card" width={1000} height={1200} className="h-auto w-72 md:w-full" />
                </MotionTransition>
                <div className="border-[#eeecec] border-[1px] my-7" />
            </div>
            
        </div>
    )
}
