import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/icTapOnnLogo.svg"
      alt="Taponn Solutions"
      width={100}
      height={50}
      className="w-[100px] h-[50px] "
    />
  );
};

export default Logo;
