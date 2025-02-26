import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";

export const ContactTile = ({name , message, image , setChat})=>{
    return (
        <button
            onClick={() => setChat({name:name,image:image})}
            className="px-4 w-full py-2 hover:bg-secondary cursor-pointer text-left">
            <span className="flex flex-row gap-2">
                <div>
                    <Avatar className="size-12">
                        <AvatarImage src={image}/>
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                </div>
                <div className="space-y-2">
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{message}</CardDescription>
                </div>
            </span>
        </button>
    )
}