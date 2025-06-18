"use client";

import { useState } from "react";

import { useLogin } from "@/hooks/useLogin";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Buttons";
import Logo from "../ui/Logo";
import { useRouter, useSearchParams } from "next/navigation";
import Label from "../ui/Label";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("User");
  const [loginType, setLoginType] = useState("email");
  const {
    loading,
    error,

    success,
    handleLogin,
  } = useLogin();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectUrl = searchParams.get("redirect") || "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await handleLogin(email, password, userType, loginType);
    console.log(result);

    if (result?.success) {
      router.push(redirectUrl);
    }
  };

  return (
    <div className="w-[80%] flex flex-col gap-[32px]">
      <header className="w-full flex flex-col gap-4 ">
        <div className="flex items-center ">
          <Logo />
        </div>
        <div>
          <p className="text-[#1f2937] text-[1.875rem] font-semibold leading-[2.5rem]">
            Welcome 👋
          </p>
          <p className="text-[#6b7280] text-[1rem] font-normal leading-[1.5rem] -tracking-[0.01562em]">
            Kindly fill in your details below to access your account
          </p>
        </div>
      </header>
      <div>
        <Form onSubmit={onSubmit}>
          <Input
            id="login-type"
            value={loginType}
            onChange={(e) => setLoginType(e.target.value)}
            className="hidden"
          />
          <Input
            id="user-type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="hidden"
          />
          <Label>Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="Enter your email address"
            className="text-[#191724] block w-full py-[16.5px] px-[14px] rounded-lg border-[#0000003b] border bg-white focus:border-[#3b82f680] focus:outline-[#3b82f680] focus:bg-white"
          />
          <Label>Password</Label>
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder="Enter your password"
            className="text-[#191724]  block w-full py-[16.5px] px-[14px] rounded-lg border-[#0000003b] border bg-white focus:border-[#3b82f680] focus:outline-[#3b82f680] focus:bg-white mb-4"
          />

          <Button type="submit" loading={loading} variant="login">
            Login
          </Button>
        </Form>
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-600">Login successful!</div>}
      </div>
    </div>
  );
};

export default LoginForm;
