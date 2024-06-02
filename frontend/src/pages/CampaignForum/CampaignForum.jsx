import { delay } from "@/lib/utils";
import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { SOCKET_CONSTANTS } from "@/constants/SOCKET_CONSTANTS";
import { useUserContext } from "@/store/UserStore";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function CampaignForum() {
  const { SocketClient, auth } = useUserContext();
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const boxRef = useRef();
  const [message, setMessage] = useState({
    user_id: auth.id,
    id: id,
    message: "",
  });
  const navigate = useNavigate();
  const { data, refetch } = useQuery({
    queryKey: [REACT_QUERY_KEYS.INFLUENCER_LIST],
    queryFn: async () => {
      const res = await axiosInstance.get(`/campaigns/${id}`);
      return res.data;
    },
  });
  console.log(data);
  const acceptCampaign = async () => {
    try {
      if (!window.confirm("Cannot be undone!")) return;
      const res = await axiosInstance.put(`/client/completed/${id}`, {
        user_id: auth.id,
      });
      const data = res.data;
      if (res.status == 200) {
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(
        toast.error(error?.response?.data?.message || error?.message)
      );
    }
  };

  useEffect(() => {
    async function fetchMessages() {
      const res = await axiosInstance.get(`/campaigns/message/${id}`);
      setMessages(res.data.messages);
    }
    fetchMessages();
  }, []);
  useEffect(() => {
    if (SocketClient) {
      console.log("hello");
      SocketClient.emit(SOCKET_CONSTANTS.USER_CONNECTED_FORUM, { id: id });
      SocketClient.on(SOCKET_CONSTANTS.USER_NEW_MESSAGE, (data) => {
        console.log(data);
        setMessages((prev) => [...prev, data]);
        console.dir(boxRef.current);
      });
      SocketClient.on(SOCKET_CONSTANTS.GENERAL_INFO_FORUM, async (data) => {
        refetch();
      });
      SocketClient.on(SOCKET_CONSTANTS.COMPLETED_CAMPAIGN, async (data) => {
        toast.success(data.message);
        await delay(1000);
        navigate("/profile");
      });
    }
  }, [SocketClient]);
  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTo(0, boxRef.current.scrollHeight);
  }, [messages]);
  console.log(data?.campaign?.completedBy?.includes(auth.id));
  return (
    <section>
      <Navbar />
      {data?.campaign?.completedBy?.length > 0 &&
        !data?.campaign?.completedBy?.includes(auth.id) && (
          <h1 className="text-sm mt-10 text-emerald-500 font-semibold text-center">
            Other side has completed this campaign please click on complete to
            close this campaig
          </h1>
        )}
      <div className="space-y-2 flex flex-col min-h-[600px] container mt-20 border rounded-md p-4  space-x-4">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2 ml-3">
            <Avatar>
              <AvatarFallback>IC</AvatarFallback>
            </Avatar>
            <h1 className="font-semibold">Just a business guy</h1>
          </div>
          {!data?.campaign?.completedBy?.includes(auth.id) && (
            <Button onClick={acceptCampaign}>Completed</Button>
          )}
        </div>
        <div className="border flex flex-grow relative flex-col rounded">
          <div
            ref={boxRef}
            className="overflow-y-auto max-h-[calc(50vh-2.7rem)]"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex px-4 w-full py-1 ${
                  auth.id === message?.user_id ? "justify-end" : ""
                }  `}
              >
                <div
                  style={{
                    backgroundColor:
                      auth.id == message?.user_id ? "#67e8f9" : "#d1d5db",
                  }}
                  className={` rounded-md px-4 py-1`}
                >
                  {message.message}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              SocketClient.emit(
                SOCKET_CONSTANTS.USER_NEW_MESSAGE_SENT,
                message
              );
              setMessage({
                ...message,
                message: "",
              });
            }}
            className="border-t flex h-11 absolute w-full bottom-0"
          >
            <Input
              value={message.message}
              onChange={(e) =>
                setMessage({
                  ...message,
                  message: e.target.value /*  */,
                })
              }
              className="border-none placeholder:text-gray-300 h-full focus:rounded-none focus-visible:ring-0"
              placeholder="Enter your text"
            />
            <Button
              variant="outline"
              className="h-full border-none rounded-none border-l"
            >
              <Send />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
