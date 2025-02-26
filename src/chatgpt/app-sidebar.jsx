import {
    AudioLines,
    Brain,
    Calendar,
    ChevronUp, DatabaseZap,
    Home,
    Inbox, Info,
    LayoutGrid, LogOut,
    Mail, Phone,
    Search,
    Settings, Shield,
    SquarePen, Star,
    User2, UserPen
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {SidebarFooter, SidebarHeader} from "../components/ui/sidebar.jsx";
import {Input} from "../components/ui/input.jsx";
import {Button} from "../components/ui/button.jsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../components/ui/dropdown-menu.jsx";
import React from "react";

// Menu items.
const chatTitles = [
    "Brainstorming Session",
    "Quick Questions, Quick Answers",
    "Deep Dive on a Topic",
    "Fun Facts & Trivia",
    "Help Me Understand This",
    "Tech Talk & Innovations",
    "Random Thoughts & Ideas",
    "Study Session: Let's Learn",
    "Creative Writing Practice",
    "Debate Mode: Let's Discuss",
    "Ask Me Anything",
    "Coding & Debugging Chat",
    "Productivity Tips & Hacks",
    "Philosophical Musings",
    "Breaking News & Analysis",
    "Casual Catch-Up",
    "AI & Future Tech",
    "Game Strategies & Tips",
    "Daily Motivation & Inspiration",
    "Book & Movie Recommendations"
];


export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex gap-2 items-center">
                    <Input
                        placeholder="Search"
                    />
                    <Button
                        variant="ghost"
                    >
                        <SquarePen />
                    </Button>
                </div>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Brain /> ChatGPT
                                </SidebarMenuButton>
                                <SidebarMenuButton>
                                    <LayoutGrid /> Explore GPTs
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Chats</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {chatTitles.map((item,index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <a >
                                            <span>{item}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem >
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Manoj Rayi
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem >
                                    <Mail/> Email
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Phone/> Phone
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Star/> Upgrade to Plus
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <UserPen /> Personalization
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <DatabaseZap /> Data Controls
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <AudioLines /> Voice
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Shield /> Security
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Info /> About
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-500">
                                    <LogOut /> Sign out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
