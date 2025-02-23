import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {Github, Linkedin, Mail, Map, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import EditProfile from "@/components/profile-template/EditProfile.jsx";
import {useState} from "react";
import EditPersonalInfo from "@/components/profile-template/EditPersonalInfo.jsx";

export default function Profile(){
    const [profile,setProfile] = useState({
        img:"https://github.com/rayimanoj8.png",
        fullName:"Manoj",
        summary:"Engineer in the field of Computer Science from Pragati Engineering College.",
        id:"rayimanoj8",
        location:"Kakinada",
        linkedin:"https://linkedin.com/in/rayimanoj8",
        github:"https://github.com/rayimanoj8",
        mail:"rayimanoj8@gmail.com",
    })
    return (
        <div className="w-[400px] mx-auto space-y-3 my-4">
            <Card className="relative">
                <EditProfile profile={profile} setProfile={setProfile}/>
                <CardHeader>
                    <Avatar className="size-16">
                        <AvatarImage src={profile.img} />
                        <AvatarFallback>👨‍💻</AvatarFallback>
                    </Avatar>
                    <CardTitle className="tracking-wide">
                        {profile.fullName}
                    </CardTitle>
                    <CardDescription>
                        @{profile.id}
                    </CardDescription>
                </CardHeader>
                <CardContent className="line-clamp-4">
                    {profile.summary}
                </CardContent>
            </Card>
            <Card className="relative">
                <CardHeader>
                    <CardTitle>
                        Professional Details
                    </CardTitle>
                </CardHeader>
                <CardContent >
                    <EditPersonalInfo profile={profile} setProfile={setProfile}/>
                    <ul className="flex flex-col">
                        <li>
                            <Button
                                variant="link"
                            >
                                <Mail/> {profile.mail}
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="link"
                            >
                                <Linkedin/> {profile.linkedin}
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="link"
                            >
                                <Github/> {profile.github}
                            </Button>
                        </li>
                        <li>
                            <div className="px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                                <MapPin /> {profile.location}
                            </div>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}