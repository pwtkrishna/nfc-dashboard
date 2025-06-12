import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Input from "../ui/Input";
import { UserProfile } from "@/types/userProfile-type";
import Label from "../ui/Label";
import Textarea from "../ui/Textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type FieldKey = "name" | "companyName" | "jobTitle" | "username" | "about";

type PersonalInfoType = {
  children: ReactNode;
  activeProfile: UserProfile | null;
  profile: UserProfile | null;
  setProfile: Dispatch<SetStateAction<UserProfile | null>>;
};

const fields: { key: FieldKey; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "companyName", label: "Company Name" },
  { key: "jobTitle", label: "Job Title" },
  { key: "username", label: "Username" },
  { key: "about", label: "About" },
];

const PersonalInfo = ({ children, profile, setProfile }: PersonalInfoType) => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState<Record<FieldKey, boolean>>({
    name: false,
    companyName: false,
    username: false,
    jobTitle: false,
    about: false,
  });

  const values = {
    name: profile?.name || "",
    companyName: profile?.company_name || "",
    jobTitle: profile?.job_title || "",
    username: profile?.username || "",
    about: profile?.about || "",
  };

  console.log(values);

  const handleChange =
    (field: string) => (e: { target: { value: unknown } }) => {
      setProfile((prev) =>
        prev ? { ...prev, [field]: e.target.value } : prev
      );
    };

  const handleFocus = (field: FieldKey) => () => {
    setFocus((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: FieldKey) => () => {
    setFocus((prev) => ({ ...prev, [field]: false }));
  };

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
        <div className="flex flex-col justify-between mt-4 mb-6 gap-3.5">
          {children}
          {fields.map((field) => (
            <div className="w-full relative" key={field.key}>
              <Label
                className={`
                  absolute left-3.5 pointer-events-none text-base font-normal
                  transition-all duration-200 origin-left
                  ${
                    field.key === "username"
                      ? "scale-90 -translate-y-3.5 translate-x-2 bg-white px-2 text-[#007da4]"
                      : focus[field.key] || values[field.key]
                      ? "scale-90 -translate-y-3.5 translate-x-2 bg-white px-2 text-[#007da4]"
                      : "scale-100 translate-y-4 text-[rgb(107,114,128)]"
                  }
                `}
                style={{ maxWidth: "calc(100% - 24px)" }}
              >
                {field.label}
              </Label>

              {field.key !== "about" ? (
                field.key === "username" ? (
                  <div className="username flex w-full py-4 px-3.5 text-base font-normal text-[#191724] border border-[#0000003b] rounded-lg  hover:border-[#191724] transition-colors duration-200">
                    <div className="flex items-center whitespace-nowrap text-[#0000008a] mr-2 max-h-8 ">
                      <p className="text-base font-normal leading-[1.5] text-[#6b7280]">
                        https://nfc-ecru.vercel.app/
                      </p>
                    </div>
                    <Input
                      value={values[field.key]}
                      variant="none"
                      className="username-input w-full block"
                      onChange={handleChange(field.key)}
                      onFocus={handleFocus(field.key)}
                      onBlur={handleBlur(field.key)}
                    />
                    <div
                      className="relative flex max-h-8 items-center whitespace-nowrap text-[#0000008a] ml-2 hover:bg-[#0000000a] rounded-[50%] p-[5px] pb-[7px]"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Tooltip open={open} onOpenChange={setOpen}>
                        <TooltipTrigger
                          // asChild
                          onClick={() => setOpen((prev) => !prev)}
                          onTouchStart={() => setOpen(true)}
                          onTouchEnd={() => setOpen(false)}
                        >
                          {/* <Button
                            type="button"
                            className="inline-flex items-center justify-center cursor-pointer text-center text-lg text-[rgba(0,0,0,0.54)] p-2 rounded-[50%]"
                            variant="none"
                          > */}
                          <svg
                            className="w-6 h-6 inline-block text-[rgba(0,0,0,0.54)] cursor-pointer "
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="InfoOutlinedIcon"
                            fill="rgba(0,0,0,0.54)"
                          >
                            <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
                          </svg>
                          {/* </Button> */}
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-white  rounded-lg font-medium text-base py-3 px-4 max-w-[300px]">
                            Username is a unique URL that <br /> you can share
                            with others to <br /> access your profile.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                ) : (
                  <Input
                    value={values[field.key]}
                    variant="outline"
                    onChange={handleChange(field.key)}
                    onFocus={handleFocus(field.key)}
                    onBlur={handleBlur(field.key)}
                  />
                )
              ) : (
                <Textarea
                  value={values[field.key]}
                  onChange={handleChange(field.key)}
                  onFocus={handleFocus(field.key)}
                  onBlur={handleBlur(field.key)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
