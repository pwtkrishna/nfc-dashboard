import { JSX } from "react";

type VisibleSocialType = {
  name: string;
  url?: string[] | undefined;
  icon: JSX.Element;
};

type LinkAddedProps = {
  social: VisibleSocialType;
};

const LinkAdded = ({ social }: LinkAddedProps) => {
  return (
    <div className="flex justify-between items-center py-2 px-4 rounded-[8px] border border-[#0000001f] bg-white">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 max-w-full bg-black border border-[rgba(0,0,0,0.12)] rounded-[50%] flex items-center justify-center">
          {social.icon}
        </div>
        <div className="flex flex-col">
          <p className="text-base font-normal leading-[1.5] text-[#191724] inline-block ">
            {social.name}
          </p>
          <p className="text-base font-normal leading-[1.5] text-[#6b7280] inline-block ">
            {social.url}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkAdded;
