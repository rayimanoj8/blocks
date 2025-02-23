import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar.jsx";
import {Card, CardDescription, CardHeader, CardTitle} from "../ui/card.jsx";

export const ContactTile = ({name , message, image , setChat})=>{
    return (
        <div
            onClick={() => setChat({name:name,image:image})}
            className="px-4 py-2 hover:bg-secondary cursor-pointer">
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
        </div>
    )
}