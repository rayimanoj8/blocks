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

export const ChatGPT = () => {
    const arr = [
        Image,File,Terminal,GraduationCap,Lightbulb
    ]
    return <SidebarProvider>
            <AppSidebar/>
            <div className="mx-auto border h-dvh lg:w-[400px] flex flex-col justify-between">
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
                    <h1 className="text-center text-xl font-medium">What can i help with?</h1>
                    <div className="flex justify-center flex-wrap gap-2">
                        <Button
                            className="rounded-full"
                            variant="outline">
                            <Image/> Create image
                        </Button>
                        <Button
                            className="rounded-full"
                            variant="outline">
                            <File/> Summarize text
                        </Button>
                        <Button
                            className="rounded-full"
                            variant="outline">
                            <Terminal/> Code
                        </Button>
                        <Button
                            className="rounded-full"
                            variant="outline">
                            <GraduationCap/> Advice
                        </Button>
                        <Button
                            className="rounded-full"
                            variant="outline">
                            <Lightbulb/> Brainstorm
                        </Button>
                    </div>
                </div>
                <div className="pb-2 space-y-2 border rounded-tr-xl rounded-tl-xl">
                    <input
                        placeholder="Message YourGPT"
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
