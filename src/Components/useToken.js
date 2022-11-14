import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("tokenData");
    if (tokenString) {
      const userToken = JSON.parse(tokenString);
      return userToken;
    }
    return null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("tokenData", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
