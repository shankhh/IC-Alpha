import { delay } from "@/lib/utils";
import toast from "react-hot-toast";
import { axiosInstance } from "@/lib/axiosInstance";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useParams } from "react-router-dom";
export default function ConnectInstaModal({ disabled }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const params = useParams();
  const { id } = params;
  const handleConnect = async () => {
    try {
      if (!email || !password) {
        return toast.error("Missing email or password");
      }
      const res = await axiosInstance.post(`influencer/connect/insta/${id}`, {
        email: email,
        password: password,
      });
      if (res.status == 200) {
        toast.success(res.data.message);
        await delay(1000);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} type="submit" className="w-full">
          Connect Instagram Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Instagram</DialogTitle>
          <DialogDescription>
            Please enter your Instagram email and password!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right font-semibold">
              Email
            </Label>
            <Input
              id="name"
              placeholder="johndoe@gmail.com"
              className="col-span-3"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right font-semibold">
              Password
            </Label>
            <Input
              id="username"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleConnect}>
            Connect
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
