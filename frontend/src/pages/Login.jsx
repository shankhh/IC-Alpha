import { useUserContext } from "@/store/UserStore";
import { axiosInstance } from "@/lib/axiosInstance";
import { delay } from "@/lib/utils";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Join from "./Join/Join";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useUserContext();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return toast.error("Missing email or password");
    }
    try {
      const res = await axiosInstance.post("/client/signin", {
        email: email,
        password: password,
      });
      if (res.status == 200) {
        toast.success(res.data.message);
        const token = res.data.token;
        const client = res.data.client;
        localStorage.setItem("token", token);
        localStorage.setItem("id", client._id);
        localStorage.setItem("type", client.type);
        await delay(1000);
        if (client?.oboarded) {
          window.location.href = "/join/onboarding";
        }
        setAuth({
          id: client._id,
          is_auth: true,
          token: token,
          type: client.type,
        });
        window.location.href = "/";
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
  return (
    <div className="relative min-h-screen">
      <div className="p w-full min-h-screen  top-0 absolute lg:grid lg:grid-cols-2 ">
        <div className="hidden -z-10 bg-muted lg:block ">
          <div className="bg-black w-full h-full p-5"></div>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
