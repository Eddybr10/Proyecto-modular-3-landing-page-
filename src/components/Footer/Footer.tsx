import Image from "next/image";
import { Reveal } from "../Reveal";



export function Footer() {
    return (
        <div className="max-w-5xl p-6 mx-auto mt-10 md:-mt-40">
            <div className="justify-between md:end-1">
                <div>
                    <Image src="/assets/logo.png" width={500} height={40} alt="Logo Bank" />
                   
                </div>
                
            </div>

            <div className="border-[#000000] border-[1px] my-7" />

            <div className="items-center justify-between md:flex">
                <div className="my-3">
                    <Reveal>
                        2024 Traductor de voz a lengua de señas Mexicanas. Todos los derechos reservados. 
                    </Reveal>
                    <br />
                    <Reveal>
                        Eduardo Flores Yépez | Jorge Adrian Zapien Meza | Gustavo Daniel Mancilla Serrano | Proyecto Modular 3
                    </Reveal>
                </div>
                
            </div>
            
        </div>
    )
} 
