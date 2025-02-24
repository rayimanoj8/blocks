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
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "../ui/resizable.jsx";

export const Home = () => {
    const temp = [
        { name: "Manoj Rayi", message: "Your Last Message Here", image: "https://github.com/rayimanoj8.png" },
        { name: "Anjali Kumar", message: "Hello, how are you?", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Ravi Teja", message: "Looking forward to the meeting.", image: "https://randomuser.me/api/portraits/men/3.jpg" },
        { name: "Sneha Reddy", message: "Can you send the report?", image: "https://randomuser.me/api/portraits/women/4.jpg" },
        { name: "Arjun Das", message: "Thank you for your help!", image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { name: "Priya Sharma", message: "Let's catch up soon.", image: "https://randomuser.me/api/portraits/women/6.jpg" },
        { name: "Vikram Singh", message: "I will call you later.", image: "https://randomuser.me/api/portraits/men/7.jpg" },
        { name: "Kavya Rao", message: "Did you receive my email?", image: "https://randomuser.me/api/portraits/women/8.jpg" },
        { name: "Rahul Verma", message: "Meeting rescheduled to tomorrow.", image: "https://randomuser.me/api/portraits/men/9.jpg" },
        { name: "Deepika Nair", message: "Happy birthday! Have a great day!", image: "https://randomuser.me/api/portraits/women/10.jpg" },
        { name: "Rohit Malhotra", message: "What's the update?", image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { name: "Neha Gupta", message: "Hope you're doing well!", image: "https://randomuser.me/api/portraits/women/12.jpg" },
        { name: "Amit Yadav", message: "Let's finalize the project.", image: "https://randomuser.me/api/portraits/men/13.jpg" },
        { name: "Simran Kaur", message: "Good morning!", image: "https://randomuser.me/api/portraits/women/14.jpg" },
        { name: "Varun Chopra", message: "I'll send the documents soon.", image: "https://randomuser.me/api/portraits/men/15.jpg" },
        { name: "Meera Joshi", message: "How was your weekend?", image: "https://randomuser.me/api/portraits/women/16.jpg" },
        { name: "Karthik Reddy", message: "Please confirm the time.", image: "https://randomuser.me/api/portraits/men/17.jpg" },
        { name: "Pooja Sharma", message: "See you at the event!", image: "https://randomuser.me/api/portraits/women/18.jpg" },
        { name: "Sandeep Kumar", message: "Just checking in.", image: "https://randomuser.me/api/portraits/men/19.jpg" },
        { name: "Lavanya Patel", message: "Don't forget the meeting.", image: "https://randomuser.me/api/portraits/women/20.jpg" }
    ]


    const [curr,setCurr] = useState(temp[0])
    return <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <ResizablePanelGroup direction="horizontal" className="h-screen">
                <ResizablePanel defaultSize={25} minSize={20} className="flex-grow">
                    <div id="resizable-1" className="flex flex-col h-screen border ml-1">
                        <div className="h-10 px-2 py-4 flex items-center shrink-0">
                            {/*<SidebarTrigger className="-ml-1"/>*/}
                            <p className="ml-1">Chats</p>
                            <div className="flex justify-end w-full">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                        >
                                            <SquarePen/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem><User/>New Contact</DropdownMenuItem>
                                        <DropdownMenuItem><Users/>New Group</DropdownMenuItem>
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
                                    <ContactTile name={item.name} message={item.message} key={index} image={item.image}
                                                 setChat={setCurr}/>
                                ))
                            }
                        </ScrollArea>
                    </div>

                </ResizablePanel>

                <ResizableHandle/>

                <ResizablePanel defaultSize={75} minSize={40}>
                    <div id="resizable-2" className="flex-grow flex flex-col justify-between h-screen ml-1 pb-2">
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
                                    ><Video/></Button>
                                    <Button
                                        type="icon"
                                        variant="ghost"
                                    ><Phone/></Button>
                                    <Button
                                        type="icon"
                                        variant="ghost"
                                    ><Search/></Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-10 pt-2 border-t">
                            <Button
                                variant="ghost"
                                size="icon"
                            >
                                <Smile/>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <Paperclip/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem><Image/>Photos & Videos</DropdownMenuItem>
                                    <DropdownMenuItem><Camera/>Camera</DropdownMenuItem>
                                    <DropdownMenuItem><File/>Document</DropdownMenuItem>
                                    <DropdownMenuItem><UserRound/>Contact</DropdownMenuItem>
                                    <DropdownMenuItem><ChartBarIncreasing/>Poll</DropdownMenuItem>
                                    <DropdownMenuItem><Brush/>Drawing</DropdownMenuItem>
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
                                <Send/>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                            >
                                <Mic/>
                            </Button>
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </SidebarInset>
    </SidebarProvider>
}