"use client"
import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import Link from "next/link"

export function Grabador() {
    return (
        
        <div>
            <br />
            <span></span>
        <div className="p-4 py-20 md:py-64">
            
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition className="flex-1 p-8 md:p-9">
                    <Image src="/assets/coard3.png" alt="Control Business" width="700" height={400} className="w-full h-auto" />
                    
                </MotionTransition>
                
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            Descarga nuestra herramienta
                        </h2>
                        
                    </Reveal>
                    
                    <Reveal>
                        <p className="max-w-md mt-10">Accede a nuestra herramienta de grabación de señas personalizadas
                        <br />
                        <span>
                            <br />--Para Windows - Mac  OS - Linux
                        </span>
                        <span>
                            <br />
                        </span>
                        <span>
                            <br />
                            <span>
                            requiere Java 8.0
                            </span>
                            
                        </span>
                        <br />
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Descarga Aqui</Link>
                        </div>
                    </Reveal>
                    
                    <div className="border-[#eeecec] border-[1px] my-7" />
                </div>
                
            </div>
            
        </div>
        </div>
    )
}
