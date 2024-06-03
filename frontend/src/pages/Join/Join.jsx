import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Github, Instagram } from "lucide-react";

const Join = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleChange = (e) => {
    setSelectedPage(e);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center text-2xl">Join us as?</DialogTitle>
        <DialogDescription>
          <RadioGroup
            className="flex justify-between py-5 items-center"
            onValueChange={handleChange}
          >
            <div className="items-center border border-[#d9d9d9] px-7 py-2 rounded-md  gap-2 flex">
              <RadioGroupItem value="business" id="option-one" />
              <Label htmlFor="option-one" className="flex gap-2 items-center">
                As a Business
                <Github />
              </Label>
            </div>
            <span className="text-xs font-semibold"> OR</span>
            <div className="flex items-center space-x-2 border border-[#d9d9d9] px-7 py-2 rounded-md">
              <RadioGroupItem value="influencer" id="option-two" />
              <Label htmlFor="option-two" className="flex gap-2 items-center">
                As a Influencer
                <Instagram />
              </Label>
            </div>
          </RadioGroup>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:justify-start">
        <div className="flex justify-end w-full">
          {selectedPage && selectedPage === "business" && (
            <Link to={"/join/business"}>
              <Button
                type="submit"
                variant="secondary"
                disabled={!selectedPage}
              >
                Continue
              </Button>
            </Link>
          )}
          {selectedPage && selectedPage === "influencer" && (
            <Link to={"/join/influencer"}>
              <Button
                type="submit"
                variant="secondary"
                disabled={!selectedPage}
              >
                Continue
              </Button>
            </Link>
          )}
          {!selectedPage && (
            <Link>
              <Button type="submit" variant="outline" disabled={!selectedPage}>
                Continue
              </Button>
            </Link>
          )}
        </div>
        <DialogClose asChild></DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default Join;
