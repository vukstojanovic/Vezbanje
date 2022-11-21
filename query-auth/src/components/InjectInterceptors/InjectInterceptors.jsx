import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { setupInterceptors } from "../../config/index";
import useDeleteAccessTokenMutation from "../../pages/Auth/api/logoutUser";

export default function InjectInterceptors() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const deleteAccessTokenMutation = useDeleteAccessTokenMutation();

  useEffect(() => {
    setupInterceptors(navigate);
  }, []);

  return null;
}
