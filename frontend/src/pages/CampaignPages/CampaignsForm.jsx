import { delay } from "@/lib/utils";
import { axiosInstance } from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import DatePicker from "@/components/Auth/OnBoarding/DatePicker";
import Navbar from "@/components/Navbar/Navbar";
import MultiSelect from "./MultiSelect";
import {
  AgeGroupsSelectData,
  CategorySelectData,
  CountrySelectData,
  GenderSelectData,
  PriceSelectData,
} from "./SelectData";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  niche: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
  country: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
  title: z.string().nonempty({
    message: "required field",
  }),
  details: z.string().nonempty({ message: "required field" }),
  amount: z.object({
    value: z.string(),
    label: z.string(),
  }),
  age_group: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
  gender: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
});
export default function CampaignsForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    console.log(data);
    data.country = data.country.map((c) => c.value);
    data.niche = data.niche.map((c) => c.value);
    data.age_group = data.age_group.map((c) => c.value);
    data.gender = data.gender.map((c) => c.value);
    data.amount = data.amount.value;
    try {
      const res = await axiosInstance.post("/campaigns/create", data);
      if (res.status == 201) {
        toast.success(res.data.message);
        await delay(1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
  console.log(errors);
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <Card className="mx-auto max-w-sm w-[650px]">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              Create Campaign
            </CardTitle>
            <CardDescription className="text-center">
              Make a new Campaign
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Campaign Title</Label>
                <Textarea {...register("title")} className="resize-none" />
                <span className="text-red-500">{errors?.title?.message}</span>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Campaign Details</Label>
                <Textarea {...register("details")} className="resize-none" />
                <span className="text-red-500">{errors?.details?.message}</span>
              </div>

              <div className="grid gap-2 w-full">
                <Label htmlFor="email">Niche</Label>
                <MultiSelect
                  control={control}
                  name={"niche"}
                  options={CategorySelectData}
                  isMulti={true}
                />
                <span className="text-red-500">{errors?.niche?.message}</span>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Country</Label>
                <MultiSelect
                  control={control}
                  name={"country"}
                  options={CountrySelectData}
                  isMulti={true}
                />
                <span className="text-red-500">{errors?.country?.message}</span>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Gender</Label>
                <MultiSelect
                  control={control}
                  name={"gender"}
                  options={GenderSelectData}
                  isMulti={true}
                />
                <span className="text-red-500">{errors?.gender?.message}</span>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Age Groups</Label>
                <MultiSelect
                  control={control}
                  name={"age_group"}
                  options={AgeGroupsSelectData}
                  isMulti={true}
                />
                <span className="text-red-500">
                  {errors?.age_group?.message}
                </span>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Price Range</Label>
                <MultiSelect
                  control={control}
                  name={"amount"}
                  options={PriceSelectData}
                  isMulti={false}
                />
                <span className="text-red-500">{errors?.amount?.message}</span>
              </div>
              <Button variant="outline" className="w-full">
                Create Campaign
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
