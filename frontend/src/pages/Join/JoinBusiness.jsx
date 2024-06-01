import { delay } from "@/lib/utils";
import { axiosInstance } from "@/lib/axiosInstance";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { CubeSpinner } from "react-spinners-kit";
import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  companyName: z.string().nonempty({ message: "company name is required!" }),
  companyWebsite: z.string().url({ message: "must be an URL" }),
  email: z.string().email({ message: "invalid email" }),
  password: z.string().nonempty({ message: "password is required" }),
});
console.log(schema);
export default function BusinessForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {},
  });
  const { mutate, isPending } = useMutation({
    mutationKey: [REACT_QUERY_KEYS.BUSINESS_SIGNUP],
    mutationFn: async (data) => {
      data["type"] = "BUSINESS";
      const res = await axiosInstance.post("/client/signup", data);
      return res.data;
    },
    onSuccess: async (data) => {
      toast.success(data.message);
      await delay(1000);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || error?.message);
    },
  });
  console.log(errors);
  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl text-center">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input placeholder="Company" {...register("companyName")} />
                <span className="text-red-500">
                  {errors?.companyName?.message}
                </span>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-website">Company Website</Label>
                <Input {...register("companyWebsite")} placeholder="URL" />
                <span className="text-red-500">
                  {errors?.companyWebsite?.message}
                </span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              <span className="text-red-500">{errors?.email?.message}</span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input {...register("password")} type="password" />
              <span className="text-red-500">{errors?.password?.message}</span>
            </div>
            {isPending ? (
              <Button variant="outline" disabled className="w-full">
                <CubeSpinner size={20} />
              </Button>
            ) : (
              <Button variant="outline" className="w-full">
                Sign up
              </Button>
            )}
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
