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

const Join = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleChange = (e) => {
    setSelectedPage(e);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Join us as?</DialogTitle>
        <DialogDescription>
          <RadioGroup onValueChange={handleChange}>
            <div className="items-center space-x-2">
              <RadioGroupItem value="business" id="option-one" />
              <Label htmlFor="option-one">As a Buyer</Label>
            </div>
            OR
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="influencer" id="option-two" />
              <Label htmlFor="option-two">As a Influencer</Label>
            </div>
          </RadioGroup>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:justify-start">
        {selectedPage && selectedPage === "business" && (
          <Link to={"/join/business"}>
            <Button type="submit" variant="secondary" disabled={!selectedPage}>
              Continue
            </Button>
          </Link>
        )}

        {selectedPage && selectedPage === "influencer" && (
          <Link to={"/join/influencer"}>
            <Button type="submit" variant="secondary" disabled={!selectedPage}>
              Continue
            </Button>
          </Link>
        )}
        {!selectedPage && (
          <Link>
            <Button type="submit" variant="secondary" disabled={!selectedPage}>
              Continue
            </Button>
          </Link>
        )}
        <DialogClose asChild></DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default Join;
