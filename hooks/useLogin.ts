"use client";
import { login } from "@/lib/auth";
import { useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [success, setSuccess] = useState(false);

  async function handleLogin(
    email: string,
    password: string,
    userType: string,
    loginType: string
  ) {
    setLoading(true);
    setError(null);

    setSuccess(false);

    const data = await login(email, password, userType, loginType);

    if (data.status === 401) {
      setError(data.message);
    } else if (data.success) {
      setSuccess(true);
    }
    setLoading(false);
    return data;
  }

  return {
    loading,
    error,

    success,
    handleLogin,
  };
}
