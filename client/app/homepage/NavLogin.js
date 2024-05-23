"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

export default function NavLogin() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          className="flex gap-1 items-center"
          variant="ghost"
          color="primary"
        >
          Login
        </Button>
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
  );
}
