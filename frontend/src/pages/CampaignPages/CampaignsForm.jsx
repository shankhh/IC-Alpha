import { CONSTANTS } from "@/lib/constants";
import { delay } from "@/lib/utils";
import { axiosInstance } from "@/lib/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import DatePicker from "@/components/Auth/OnBoarding/DatePicker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Categories } from "@/components/Discover/DiscoverFilter";
import { useState } from "react";
import countryData from "../../data/country.json";
import { genders } from "@/data/gender";
const CountryItems = countryData.map((countryObj) => {
  return countryObj.name.common;
});
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  bio: z.string().min(3, { message: "Bio should be minimum of 3 chars" }),
  dob: z.date(),
  niche: z.string(),
  country: z.string(),
  geender: z.string(),
});

export default function CampaignsForm() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      dob: new Date(),
    },
  });
  console.log(errors);
  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.post("/client/signup", {
        ...data,
        ["type"]: CONSTANTS.INFLUENCER,
      });
      if (res.status == 201) {
        toast.success("Account created successfully!");
        await delay(1000);
        navigate(`/join/influencer/next/${res.data.client?._id}`, {
          replace: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm w-[650px]">
        <CardHeader>
          <CardTitle className="text-xl text-center">Create Campaign</CardTitle>
          <CardDescription className="text-center">
            Make a new Campaign
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Campaign Title</Label>
              <Textarea {...register("bio")} className="resize-none" />
              <span className="text-red-500">{errors?.name?.message}</span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Campaign Details</Label>
              <Textarea {...register("bio")} className="resize-none" />
              <span className="text-red-500">{errors?.name?.message}</span>
            </div>
            {/* <div className="grid gap-2">
              <Label htmlFor="password">Select your Date of Birth</Label>
              <DatePicker date={date} setDate={setDate} control={control} />
              <span className="text-red-500">{errors?.password?.message}</span>
            </div> */}
            <div className="grid gap-2 w-full">
              <Label htmlFor="email">Niche</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a niche" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a niche</SelectLabel>
                    {Categories.map((cat, index) => (
                      <SelectItem value={cat} key={index}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="text-red-500">{errors?.email?.message}</span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Country</Label>
              <Controller
                control={control}
                name="country"
                render={({ field: { onChange } }) => (
                  <Select onChange={onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a country</SelectLabel>
                        {CountryItems.map((cat, index) => (
                          <SelectItem value={cat} key={index}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <span className="text-red-500">{errors?.email?.message}</span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Influencer Gender</Label>
              <Controller
                control={control}
                name="gender"
                render={({ field: { onChange } }) => (
                  <Select onSele>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a gender</SelectLabel>
                        {genders.map((cat, index) => (
                          <SelectItem value={cat} key={index}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Influencer Age Group</Label>
              <Controller
                control={control}
                name="age"
                render={({ field: { onChange } }) => (
                  <Select onSele>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>All</SelectLabel>
                        <SelectItem value={13 - 17}>13-17</SelectItem>
                        <SelectItem value={18 - 27}>18-27</SelectItem>
                        <SelectItem value={25 - 34}>25-34</SelectItem>
                        <SelectItem value={35 - 44}>35-44</SelectItem>
                        <SelectItem value={45 - 64}>45-64</SelectItem>
                        {/* {GenderItems.map((gender) => {
              return <SelectItem value={gender}>{gender}</SelectItem>;
            })} */}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <Button variant="outline" className="w-full">
              Create Campaign
            </Button>
          </form>
          {/* <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="underline">
              Sign in 
            </Link>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
