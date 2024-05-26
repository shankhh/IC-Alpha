import { axiosInstance } from "@/lib/axiosInstance";
import { useState, useContext, createContext, useEffect } from "react";
const initialState = {
  auth: {
    id: null,
    is_auth: false,
    token: "",
    type: "",
  },
  setAuth: () => {},
};
const AppContext = createContext(initialState);
export default function StoreProvider({ children }) {
  const [auth, setAuth] = useState({
    id: localStorage.getItem("id"),
    is_auth: localStorage.getItem("token") ? true : false,
    token: "",
    type: localStorage.getItem("type"),
  });
  const sharedState = {
    auth: auth,
    setAuth: setAuth,
  };
  useEffect(() => {
    async function checkAuthState() {
      const id = localStorage.getItem("id");
      const is_auth = localStorage.getItem("token") ? true : false;
      const token = localStorage.getItem("token");
      const type = localStorage.getItem("type");
      //implement get user functionality to retrieve current user data from token
      //along with  checking the authenticity of the token
      //     if (token) {
      //       try {
      //         const response = await AxiosInstance.get("/info");
      //         if (response.status == 200) {
      //           setUser_data(response.data?.user || {});
      //         }
      //       } catch (error) {
      //         if (error?.response?.data?.expired) {
      //           localStorage.clear();
      //           window.location.reload();
      //         }
      //         console.log(error);
      //       }
      //     }
      //   }
      setAuth({ id, is_auth, token, type });
    }
    checkAuthState();
  }, [auth?.token]);
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useUserContext() {
  return useContext(AppContext);
}
