"use client";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "../ui/sidebar.jsx";
import {AppSidebar} from "../app-sidebar.jsx";
import {
    Brush,
    Camera, ChartBarIncreasing,
    CircleOff,
    CircleUserRound, File, Image,
    ListFilter,
    MessageSquareDashed,
    MessageSquareDot, Mic, Paperclip, Phone,
    Search, Send, Smile,
    SquarePen,
    Star, User, UserRound,
    Users, Video
} from "lucide-react";
import {Button} from "../ui/button.jsx";
import {Input} from "../ui/input.jsx";
import {ContactTile} from "./ContactTile.jsx";
import {ScrollArea} from "../ui/scroll-area.jsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "../ui/dropdown-menu.jsx";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar.jsx";
import {CardDescription, CardTitle} from "../ui/card.jsx";
import {useState} from "react";

export const Home = () => {
    const temp = [
        { name: "Manoj Rayi", message: "Your Last Message Here", image: "https://picsum.photos/200/300?random=1" },
        { name: "Anjali Kumar", message: "Hello, how are you?", image: "https://picsum.photos/200/300?random=2" },
        { name: "Ravi Teja", message: "Looking forward to the meeting.", image: "https://picsum.photos/200/300?random=3" },
        { name: "Sneha Reddy", message: "Can you send the report?", image: "https://picsum.photos/200/300?random=4" },
        { name: "Arjun Das", message: "Thank you for your help!", image: "https://picsum.photos/200/300?random=5" },
        { name: "Priya Sharma", message: "Let's catch up soon.", image: "https://picsum.photos/200/300?random=6" },
        { name: "Vikram Singh", message: "I will call you later.", image: "https://picsum.photos/200/300?random=7" },
        { name: "Kavya Rao", message: "Did you receive my email?", image: "https://picsum.photos/200/300?random=8" },
        { name: "Rahul Verma", message: "Meeting rescheduled to tomorrow.", image: "https://picsum.photos/200/300?random=9" },
        { name: "Deepika Nair", message: "Happy birthday! Have a great day!", image: "https://picsum.photos/200/300?random=10" }
    ]
    const [curr,setCurr] = useState(temp[0])
    return <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <div className="flex">
                <div className="w-[400px] flex flex-col h-screen border ml-1">
                    <div className="h-10 px-2 py-4 flex items-center shrink-0">
                        <SidebarTrigger className="-ml-1"/>
                        <p className="ml-1">Chats</p>
                        <div className="flex justify-end w-full">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <SquarePen />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem><User />New Contact</DropdownMenuItem>
                                    <DropdownMenuItem><Users />New Group</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <ListFilter/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Filter Chats By</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <MessageSquareDot/>Unread
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Star/>Favorites
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <CircleUserRound/>Contacts
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <CircleOff/>Non Contacts
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Users/>Groups
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <MessageSquareDashed/>Drafts
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className="relative px-2 py-4">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5"/>
                        <Input
                            placeholder="Search or start new chat"
                            className="pl-10"
                        />
                    </div>

                    <ScrollArea className="flex-grow">
                        {
                            temp.map((item, index) => (
                                <ContactTile name={item.name} message={item.message} key={index} image={item.image} setChat={setCurr}/>
                            ))
                        }
                    </ScrollArea>
                </div>
                <div className="flex-grow flex flex-col justify-between h-screen ml-1 pb-2">
                    <div id="head" className="h-16 border-b flex items-center px-3">
                        <div className="flex gap-2 items-center flex-grow">
                            <Avatar className="size-12">
                                <AvatarImage src={curr.image}/>
                                <AvatarFallback>PR</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <CardTitle>{curr.name}</CardTitle>
                                <CardDescription>Contact Info</CardDescription>
                            </div>
                            <div className="flex-grow flex justify-end">
                                <Button
                                    type="icon"
                                    variant="ghost"
                                ><Video /></Button>
                                <Button
                                    type="icon"
                                    variant="ghost"
                                ><Phone /></Button>
                                <Button
                                    type="icon"
                                    variant="ghost"
                                ><Search /></Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-10 pt-2 border-t">
                        <Button
                            variant="ghost"
                            size="icon"
                        >
                            <Smile />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Paperclip />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem><Image />Photos & Videos</DropdownMenuItem>
                                <DropdownMenuItem><Camera />Camera</DropdownMenuItem>
                                <DropdownMenuItem><File />Document</DropdownMenuItem>
                                <DropdownMenuItem><UserRound />Contact</DropdownMenuItem>
                                <DropdownMenuItem><ChartBarIncreasing />Poll</DropdownMenuItem>
                                <DropdownMenuItem><Brush />Drawing</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Input
                            className="flex-grow border-0 outline-none ring-0 focus:ring-0 focus:outline-none"
                            placeholder="Type a message"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                        >
                            <Send />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                        >
                            <Mic />
                        </Button>
                    </div>
                </div>
            </div>
        </SidebarInset>
    </SidebarProvider>
}