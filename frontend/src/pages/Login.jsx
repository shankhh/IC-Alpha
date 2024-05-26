import { Link } from "react-router-dom";
import { useEffect } from "react";

import Join from "./Join/Join";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import FacebookDialog from "@/components/Auth/Facebook/FacebookDialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const INSTAGRAM_APP_ID = import.meta.env.VITE_INSTAGRAM_APP_ID;
console.log(INSTAGRAM_APP_ID);

const Login = () => {
  function GRANT_ACCESS_INSTA() {
    console.log("clicked");
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_APP_ID}
       &redirect_uri=https://localhost:5173/&scope=user_profile,user_media&response_type=code`;
  }

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
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  required
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
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" onClick={GRANT_ACCESS_INSTA}>
                Grant access to Instagram
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account? {/* Join Dialog */}
              <Dialog>
                <DialogTrigger>
                  <Button variant="underline" className=" underline ">
                    Sign up
                  </Button>
                </DialogTrigger>
                <Join />
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
