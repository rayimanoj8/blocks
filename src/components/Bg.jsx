import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, MapPin, Edit } from "lucide-react";

export default function ProfilePage() {
    const [isOpen, setIsOpen] = useState(false);
    const [profile, setProfile] = useState({
        img: "https://github.com/rayimanoj8.png",
        fullName: "Manoj",
        summary: "Engineer in the field of Computer Science from Pragati Engineering College.",
        id: "rayimanoj8",
        location: "Kakinada",
        linkedin: "https://linkedin.com/in/rayimanoj8",
        github: "https://github.com/rayimanoj8",
        mail: "rayimanoj8@gmail.com",
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.id]: e.target.value });
    };

    const handleSave = () => {
        setIsOpen(false);
    };

    return (
        <div className="w-[400px] mx-auto space-y-3 my-4">
            {/* Profile Card */}
            <Card>
                <CardHeader className="relative">
                    <Button
                        variant="ghost"
                        className="absolute right-4 top-4"
                        onClick={() => setIsOpen(true)}
                    >
                        <Edit className="h-4 w-4" />
                    </Button>
                    <div className="flex flex-col">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={profile.img} alt={profile.fullName} />
                            <AvatarFallback>👨‍💻</AvatarFallback>
                        </Avatar>
                        <CardTitle className="mt-4">{profile.fullName}</CardTitle>
                        <CardDescription>@{profile.id}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{profile.summary}</p>
                </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <Button variant="link" className="w-full justify-start">
                            <Mail className="mr-2 h-4 w-4" />
                            {profile.mail}
                        </Button>
                        <Button variant="link" className="w-full justify-start">
                            <MapPin className="mr-2 h-4 w-4" />
                            {profile.location}
                        </Button>
                        <Button variant="link" className="w-full justify-start">
                            <Linkedin className="mr-2 h-4 w-4" />
                            {profile.linkedin}
                        </Button>
                        <Button variant="link" className="w-full justify-start">
                            <Github className="mr-2 h-4 w-4" />
                            {profile.github}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Edit Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="img" className="text-right">Avatar URL</Label>
                            <Input
                                id="img"
                                value={profile.img}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="fullName" className="text-right">Name</Label>
                            <Input
                                id="fullName"
                                value={profile.fullName}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="id" className="text-right">Username</Label>
                            <Input
                                id="id"
                                value={profile.id}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="summary" className="text-right">Bio</Label>
                            <Textarea
                                id="summary"
                                value={profile.summary}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="mail" className="text-right">Email</Label>
                            <Input
                                id="mail"
                                value={profile.mail}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="location" className="text-right">Location</Label>
                            <Input
                                id="location"
                                value={profile.location}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="linkedin" className="text-right">LinkedIn</Label>
                            <Input
                                id="linkedin"
                                value={profile.linkedin}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="github" className="text-right">GitHub</Label>
                            <Input
                                id="github"
                                value={profile.github}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSave}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}