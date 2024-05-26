import ConnectInstaModal from "@/components/Auth/ConnectInsta/ConnectInstaModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function JoinInfluencerNext() {
  const [username, setUsername] = useState("");
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <ConnectInstaModal
          disabled={username && username.length > 3 ? false : true}
        />
      </div>
    </div>
  );
}
