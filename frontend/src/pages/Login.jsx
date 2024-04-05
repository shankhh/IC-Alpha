import { Link } from "react-router-dom";
import { DialogTrigger, Dialog } from "@/components/ui/dialog";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar/Navbar";
// import FacebookDialog from "@/components/Auth/Facebook/FacebookDialog";
const INSTAGRAM_APP_ID = import.meta.env.VITE_INSTAGRAM_APP_ID; 
console.log(INSTAGRAM_APP_ID)
export default function Login() {
  function GRANT_ACCESS_INSTA() {
    console.log("clicked");
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_APP_ID}
       &redirect_uri=https://localhost:5173/&scope=user_profile,user_media&response_type=code`;
  }

  return (
    <div className="relative">
      <div className="z-40">
        <Navbar textColorHeader={"#fff"} />
      </div>
      <div className="w-full  top-0 absolute lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
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
                  placeholder="m@example.com"
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
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
              {/* <Dialog>
                <DialogTrigger>
                  <Button variant="outline" className="w-full">
                    Login with Facebook
                  </Button>
                </DialogTrigger>
                <FacebookDialog />
              </Dialog> */}
              {/* <fb:login-button
                scope="public_profile,email"
                onlogin="checkLoginState();"
              ></fb:login-button> */}
              <Button onClick={GRANT_ACCESS_INSTA}>
                Grant access to Instagram
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="#" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
