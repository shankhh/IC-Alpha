import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function FacebookDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          Login using Facebook <span className="text-sm">(Must for Content Creators)</span>
        </DialogTitle>
        <DialogDescription>
          
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
