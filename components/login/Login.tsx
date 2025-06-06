"use client";

import { Suspense } from "react";
import LoginForm from "./LoginForm";
import LoginSidebar from "./LoginSidebar";

const Login = () => {
  return (
    <div className="bg-white flex h-screen">
      <div className="max-sm:hidden h-screen">
        <LoginSidebar />
      </div>
      <div className="p-12 max-sm:p-8 max-w-full grow flex-[1] basis-0 flex flex-col justify-between items-center h-screen overflow-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default Login;
