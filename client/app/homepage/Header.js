"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DinoIcon from "../../public/dino.svg";
import NavLogin from "./NavLogin";

export default function Front() {
  return (
    <div className="flex flex-row justify-between p-7 gap-1">
      <div className="">
        <Avatar className="w-[50PX] h-[50PX] shadow-xl">
          <AvatarImage src="" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex place-self-center">
        <DinoIcon className="h-[70px] w-[70px] cursor-pointer" />
      </div>
      <div className="">
        <NavLogin />
      </div>
    </div>
  );
}
