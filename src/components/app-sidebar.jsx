import {
    Calendar, ChevronUp,
    CircleFadingPlus,
    Home,
    Inbox,
    Menu,
    MessageCircle,
    Phone,
    Search,
    Settings,
    User,
    User2
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
import {SidebarFooter} from "./ui/sidebar.jsx";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "./ui/dropdown-menu.jsx";

// Menu items.
const items = [
    {
        title: "Expand",
        url: "#",
        icon: Menu,
    },
    {
        title: "Messages",
        url: "#",
        icon: MessageCircle ,
    },
    {
        title: "Phone",
        url: "#",
        icon: Phone,
    },
    {
        title: "Status",
        url: "#",
        icon: CircleFadingPlus,
    },
]

export function AppSidebar() {
    return (
        <Sidebar variant="float" collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigate</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
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
                            <SidebarMenuButton>
                                <Settings/> Settings
                            </SidebarMenuButton>
                        </SidebarMenuItem>
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
                                    <DropdownMenuItem >
                                        <a href="https://github.com/rayimanoj8/" >
                                            Account
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Back Up</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Sign out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
