import Image from "next/image";

const LoginSidebar = () => {
  return (
    <Image
      src="/login/login-sidebar.svg"
      alt="Login Form"
      width={300}
      height={900}
      className="h-screen w-[56.25vh] object-cover sticky aspect-[576 / 1024]"
    />
  );
};

export default LoginSidebar;
