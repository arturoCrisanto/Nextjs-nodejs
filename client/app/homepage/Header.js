"use client";
import { CalendarPlus2, LogIn, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import DinoIcon from "../../public/dino.svg";

export default function Front() {
  return (
    <div className="flex flex-row justify-between p-7 gap-1">
      <div className="">
        <Avatar className="w-[50PX] h-[50PX]">
          <AvatarImage src="" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex place-self-center">
        <DinoIcon className="h-[70px] w-[70px]" />
      </div>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
              Login
            </h4>
            <DropdownMenuContent align="end" className="p-2">
              <DropdownMenuLabel className="flex justify-center items-center">
                Hello
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-1 p-3">
                <LogIn size={17} color="#353431" strokeWidth={1.6} gap="1" />
                <h5>Signup</h5>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-1 p-3">
                <UserPlus size={17} color="#353431" strokeWidth={1.6} gap="1" />
                <h5>Register</h5>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </div>
  );
}
