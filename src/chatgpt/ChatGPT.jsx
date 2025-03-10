import {
    AudioLines,
    Bold, Camera,
    EllipsisVertical, File, Files, Globe,
    GraduationCap, Image, Info, Italic,
    Lightbulb,
    MessageCircleDashed, Mic,
    PanelLeft, Plus,
    Sparkle,
    Terminal, Underline
} from "lucide-react";
import {Button} from "../components/ui/button.jsx";
import {Input} from "../components/ui/input.jsx";
import {ToggleGroup, ToggleGroupItem} from "../components/ui/toggle-group.jsx";
import {Toggle} from "../components/ui/toggle.jsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../components/ui/dropdown-menu.jsx";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "../components/ui/sidebar.jsx";
import {AppSidebar} from "./app-sidebar.jsx";
import React from "react";

export const ChatGPT = () => {
    const arr = [
        Image,File,Terminal,GraduationCap,Lightbulb
    ]
    const [prompt, setPrompt] = React.useState(null);
    const buttons = [
        { label: "Create Image", icon: Image },
        { label: "Summarize Text", icon: File },
        { label: "Code", icon: Terminal },
        { label: "Advice", icon: GraduationCap },
        { label: "Brainstorm", icon: Lightbulb }
    ];
    return <SidebarProvider>
            <AppSidebar/>
            <div className="mx-auto h-dvh  flex flex-col justify-between">
                <div id="navbar"
                    className="flex justify-between py-2 px-1"
                >
                    <SidebarTrigger/>
                    <Button
                        variant="secondary"
                        size="sm"
                    >
                        Get Plus <Sparkle />
                    </Button>
                    <span className="flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                        >
                            <MessageCircleDashed />
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <EllipsisVertical />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem><Info />View Details</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </span>
                </div>

                <div className="space-y-5">
                    <h1 className="text-center text-xl lg:text-3xl font-medium">What can i help with?</h1>
                    <div className="flex justify-center flex-wrap gap-2">
                        {
                            buttons.map((item,index)=>(
                                <Button
                                    key={index}
                                    className="rounded-full"
                                    variant="outline"
                                    onClick={()=>setPrompt(item.label)}
                                >
                                    <item.icon/> {item.label}
                                </Button>
                            ))
                        }
                    </div>
                </div>
                <div className="pb-2 space-y-2 border rounded-tr-xl rounded-tl-xl">
                    <input
                        placeholder="Message YourGPT"
                        value={prompt}
                        onChange={(e)=>setPrompt(e.target.value)}
                        className="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base shadow-sm transition-colors outline-none"
                    />
                    <div className="flex gap-1 px-2 ">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    className="rounded-full"
                                    variant="outline"
                                    size="icon"
                                >
                                    <Plus/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem><Image />Photos</DropdownMenuItem>
                                <DropdownMenuItem><Camera />Camera</DropdownMenuItem>
                                <DropdownMenuItem><Files />Files</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <span className="space-x-1">
                            <Toggle className="rounded-full border">
                                <Globe className="h-4 w-4" /> Search
                            </Toggle>
                            <Toggle className="rounded-full border">
                                <Lightbulb className="h-4 w-4" /> Reason
                            </Toggle>
                        </span>
                        <span className="flex-grow flex justify-end gap-1">
                            <Button
                                className="rounded-full"
                                variant="outline"
                                size="icon"

                            ><Mic/></Button>
                            <Button
                                className="rounded-full"
                                size="icon"
                            ><AudioLines /></Button>
                        </span>
                    </div>
                </div>
            </div>
    </SidebarProvider>
}
