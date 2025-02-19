import React from "react";
import {SparklesText} from "@/components/ui/sparkles-text.jsx";
import {AuroraText} from "@/components/ui/aurora-text.jsx";
import {ArrowLeft, ArrowRight} from "lucide-react";

export default function Bg() {
    return <div className={"h-screen flex flex-col justify-center items-center"}>
        <h1 className={"text-4xl lg:text-6xl font-bold mb-6 tracking-tighter"}>
            Bridging The Gap Between
        </h1>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter">
            <AuroraText>Ideas</AuroraText> And <AuroraText>Execution</AuroraText>
        </h1>
        <p className="mt-4 mb-2
         line-clamp-3 text-lg text-center tracking-wide capitalize">
            A dedicated platform where developers exchange ideas, troubleshoot challenges, and build the future together
        </p>

        <button className="mt-4 border border-white px-4 py-2 rounded-full hover:bg-white/10 transition duration-150 ease-linear">
            ✨ Get Started <ArrowRight className={"inline-block"}/>
        </button>
    </div>
}
