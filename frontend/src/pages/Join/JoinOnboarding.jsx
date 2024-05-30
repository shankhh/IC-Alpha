import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
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
import { useMutation } from "@tanstack/react-query";
import { RingSpinner } from "react-spinners-kit";
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
  bio: z
    .string()
    .min(10, { message: "Bio should be minimum of 10 characters" }),
  dob: z.date(),
  niche: z.string(),
  country: z.string(),
  gender: z.string(),
});

export default function JoinOnboarding() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      dob: new Date(),
    },
  });
  const { isError, isPending, mutate } = useMutation({
    mutationKey: [REACT_QUERY_KEYS.INFLUENCER_INFO_UPLOAD],
    mutationFn: async (data) => {
      const token = localStorage.getItem("token");
      const res = await axiosInstance.post("/influencer/info", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
    onSuccess: async (data) => {
      toast.success(data.message);
      window.location.href = "/profile";
    },
    onError: async (error) => {
      toast.error(error?.response?.data?.message || error?.message);
    },
  });
  const onSubmit = async (data) => {
    mutate(data);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm w-[350px]">
        <CardHeader>
          <CardTitle className="text-xl text-center">Influencer Info</CardTitle>
          <CardDescription className="text-center">
            Enter your information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Bio</Label>
              <Textarea {...register("bio")} className="resize-none" />
              <span className="text-red-500 text-xs">
                {errors?.bio?.message}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Select your Date of Birth</Label>
              <DatePicker
                date={watch("bio")}
                setDate={setDate}
                control={control}
              />
              <span className="text-red-500 text-xs">
                {errors?.dob?.message}
              </span>
            </div>
            <div className="grid gap-2 w-full">
              <Label htmlFor="email">Niche</Label>
              <Controller
                control={control}
                name="niche"
                render={({ field: { onChange } }) => (
                  <Select onValueChange={onChange}>
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
                )}
              />
              <span className="text-red-500 text-xs">
                {errors?.niche?.message}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Country</Label>
              <Controller
                control={control}
                name="country"
                render={({ field: { onChange } }) => (
                  <Select onValueChange={onChange}>
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
              <span className="text-red-500 text-xs">
                {errors?.country?.message}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Gender</Label>
              <Controller
                control={control}
                name="gender"
                render={({ field: { onChange } }) => (
                  <Select onValueChange={onChange}>
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
              <span className="text-red-500 text-xs">
                {errors?.gender?.message}
              </span>
            </div>
            {isPending ? (
              <Button variant="secondary" disabled className="w-full">
                <RingSpinner color="#000" />
              </Button>
            ) : (
              <Button variant="secondary" className="w-full">
                Update
              </Button>
            )}
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
