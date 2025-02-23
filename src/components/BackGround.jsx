"use client"

import { useEffect, useState } from "react"
import { Particles } from "@/components/ui/particles"
import { motion } from "framer-motion";
import {AuroraText} from "@/components/ui/aurora-text.jsx";
import {ArrowRight} from "lucide-react";
export default function Demo() {
    const [color, setColor] = useState("#ffffff")

    return (
        <div
            className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className={"dark h-screen flex flex-col justify-center items-center"}>
                    <h1 className={"text-4xl lg:text-6xl font-bold mb-6 tracking-tighter"}>
                        Bridging The Gap Between
                    </h1>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter">
                        <AuroraText>Ideas</AuroraText> And <AuroraText>Execution</AuroraText>
                    </h1>
                    <p className="mt-4 mb-2
         line-clamp-3 text-lg text-center tracking-wide capitalize">
                        A dedicated platform where developers exchange ideas, troubleshoot challenges, and build the
                        future
                        together
                    </p>

                    <button
                        className="mt-4 border px-4 py-2 rounded-full hover:scale-105 transition duration-150 ease-linear font-semibold">
                        ✨ Get Started <ArrowRight className={"inline-block"}/>
                    </button>
                </div>
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </div>
    )
}
