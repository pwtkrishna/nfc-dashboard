import { ReactNode, useState } from "react";
import Input from "../ui/Input";
import { UserProfile } from "@/types/userProfile-type";

type PersonalInfoType = {
  children: ReactNode;
  activeProfile: UserProfile | null;
};

const PersonalInfo = ({ children, activeProfile }: PersonalInfoType) => {
  const [name, setName] = useState(activeProfile?.name);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div className="p-6 rounded-2xl ">
      <header>
        <h5 className="text-xl leading-[1.334] text-[#1f2937] font-medium ">
          Personal Details
        </h5>
        <hr
          className="mt-4 border border-[#0000001f] h-full"
          style={{ borderBottomWidth: "thin" }}
        />
      </header>
      <div className="w-full">
        <div className="flex justify-between mt-4 mb-6 gap-8 max-md:flex-col ">
          {children}
          <div>
            <Input
              title="Profile Label"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
