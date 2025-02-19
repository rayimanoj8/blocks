import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Edit } from "lucide-react";
import { Textarea } from "@/components/ui/textarea.jsx";

export default function EditProfile({profile , setProfile}) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(profile)
    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.id]: e.target.value });
    };

    const handleSave = () => {
        setIsOpen(false)
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className="absolute right-6 top-6" onClick={() => setIsOpen(true)}>
                    <Edit className="size-10" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="img" className="text-right">
                            Image Url
                        </Label>
                        <Input
                            id="img"
                            defaultValue={profile.img}
                            placeholder={'Enter your FullName'}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="fullName" className="text-right">
                            Full Name
                        </Label>
                        <Input
                            id="fullName"
                            defaultValue={profile.fullName}
                            placeholder={'Enter your FullName'}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="id" className="text-right">
                            User Id
                        </Label>
                        <Input
                            id="id"
                            defaultValue={profile.id}
                            placeholder={'Enter your FullName'}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="summary" className="text-right">
                            Summary
                        </Label>
                        <Textarea
                            id="summary"
                            defaultValue={profile.summary}
                            placeholder={'Enter your summary'}
                            onChange={handleChange}
                            className="col-span-3 h-20"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleSave}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
