import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthCheck = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
  }, [navigate]);

  return <>{children}</>;
};
