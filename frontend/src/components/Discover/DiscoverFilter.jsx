import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaTiktok,
  FaPinterest,
  FaReddit,
  FaTumblr,
  FaYoutube,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import { BsGridFill } from "react-icons/bs";
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

import { DiscoverSelect } from "./DiscoverSelect";

const SocialMediaPlatforms = [
  { name: "Facebook", logo: <FaFacebook /> },
  { name: "Instagram", logo: <FaInstagram /> },
  { name: "Twitter", logo: <FaTwitter /> },
  { name: "LinkedIn", logo: <FaLinkedinIn /> },
  { name: "Snapchat", logo: <FaSnapchatGhost /> },
  { name: "TikTok", logo: <FaTiktok /> },
  { name: "Pinterest", logo: <FaPinterest /> },
  { name: "Reddit", logo: <FaReddit /> },
  { name: "Tumblr", logo: <FaTumblr /> },
  { name: "YouTube", logo: <FaYoutube /> },
];

const Categories = [
  "Fashion",
  "Beauty",
  "Technology",
  "Home Decor",
  "Fitness",
  "Travel",
  "Food",
  "Art",
  "Gaming",
  "Books",
  "Music",
  "Sports",
  "Pets",
  "Health",
  "Finance",
  "Education",
  "Photography",
  "Outdoor",
  "DIY",
  "Movies",
];

export default function DiscoverFilter() {
  return (
    <>
      <div className="w-[200px] hidden md:block">
        <AccordioDiscover />
      </div>
      <div className="mt-[10px] -ml-2 md:hidden">
        <Sheet >
          <SheetTrigger className="flex items-center gap-2 border p-1 rounded-md shadow-md">
            <BsGridFill /> <p>Filter</p>
          </SheetTrigger>
          <SheetContent className='overflow-y-auto pb-14'>
            <AccordioDiscover />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

const AccordioDiscover = () => {
  return (
    <div>
      <Accordion type="multiple" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger className="">Influencer Channel</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <div className="flex items-center gap-2 ">
              <Checkbox />
              <p>All</p>
            </div>

            {SocialMediaPlatforms.map((socials) => (
              <div className="flex items-center gap-2">
                <Checkbox />
                <p>{socials.name}</p>
                {socials.logo}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-0">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent className="space-y-2">
            {Categories.map((category) => (
              <div className="flex items-center gap-3 ">
                <Checkbox />
                <p>{category}</p>
                <MdLogout className="" />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* dalo here  */}
      <DiscoverSelect />
    </div>
  );
};
