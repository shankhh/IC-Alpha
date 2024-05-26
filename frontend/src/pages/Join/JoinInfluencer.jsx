import { CONSTANTS } from "@/lib/constants";
import { delay } from "@/lib/utils";
import { axiosInstance } from "@/lib/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
// import
const schema = z.object({
  name: z.string().min(3, { message: "name should be minimum of 3 chars" }),
  email: z.string().email({ message: "Invalid email!" }),
  password: z
    .string()
    .min(6, { message: "Password length should be minimum of six" }),
});
export default function InfluencerForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(schema),
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
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl text-center">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name")}
                id="name"
                placeholder="Joh Doe"
                className={`${errors?.name ? "border-red-500" : ""}   `}
              />
              <span className="text-red-500">{errors?.name?.message}</span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
                className={`${errors?.email ? "border-red-500" : ""}   `}
              />
              <span className="text-red-500">{errors?.email?.message}</span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password")}
                id="password"
                type="password"
                className={`${errors?.password ? "border-red-500" : ""}   `}
              />
              <span className="text-red-500">{errors?.password?.message}</span>
            </div>
            <Button variant="outline" className="w-full">
              Sign up
            </Button>
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
