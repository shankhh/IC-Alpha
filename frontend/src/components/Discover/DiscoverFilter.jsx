import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { DiscoverSelect } from "./DiscoverSelect";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SocialMediaPlatforms = [
  { name: "Facebook", logo: <FaFacebook /> },
  { name: "Instagram", logo: <FaInstagram /> },
];

export const Categories = [
  "Technology",
  "Fitness",
  "Travel",
  "Fashion",
  "Art",
  "Gaming",
  "Sports",
  "Education",
  "Photography",
];

export default function DiscoverFilter({ dispatch }) {
  return (
    <>
      <div className="w-[200px] hidden md:block">
        <AccordioDiscover dispatch={dispatch} />
      </div>
      <div className="mt-[10px] -ml-2 md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center gap-2 border p-1 rounded-md shadow-md">
            <BsGridFill /> <p>Filter</p>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto pb-14">
            <AccordioDiscover />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

const AccordioDiscover = ({ dispatch }) => {
  return (
    <div>
      <Accordion type="multiple" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger className="">Influencer Channel</AccordionTrigger>
          <AccordionContent className="space-y-2">sioc</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-0">
          <AccordionTrigger>Niche</AccordionTrigger>
          <AccordionContent className="space-y-2">
            {Categories.map((category) => (
              <div className="flex items-center gap-3 ">
                <Checkbox
                  value={category}
                  onCheckedChange={(e) => {
                    if (e) {
                      dispatch({
                        type: "niche-select",
                        payload: category,
                      });
                    } else {
                      dispatch({
                        type: "niche-remove",
                        payload: category,
                      });
                    }
                  }}
                />
                <p>{category}</p>
                <MdLogout className="" />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* dalo here  */}
      <DiscoverSelect dispatch={dispatch} />
    </div>
  );
};
