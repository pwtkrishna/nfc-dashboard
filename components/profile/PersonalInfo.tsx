import { ReactNode, useState } from "react";
import Input from "../ui/Input";
import { UserProfile } from "@/types/userProfile-type";
import Label from "../ui/Label";
import Textarea from "../ui/Textarea";

type FieldKey = "name" | "companyName" | "jobTitle" | "about";

type PersonalInfoType = {
  children: ReactNode;
  activeProfile: UserProfile | null;
};

const fields: { key: FieldKey; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "companyName", label: "Company Name" },
  { key: "jobTitle", label: "Job Title" },
  { key: "about", label: "About" },
];

const PersonalInfo = ({ children, activeProfile }: PersonalInfoType) => {
  const [values, setValues] = useState<Record<FieldKey, string>>({
    name: activeProfile?.name || "",
    companyName: activeProfile?.company_name || "",
    jobTitle: activeProfile?.job_title || "",
    about: activeProfile?.about || "",
  });

  const [focus, setFocus] = useState<Record<FieldKey, boolean>>({
    name: false,
    companyName: false,
    jobTitle: false,
    about: false,
  });

  const handleChange =
    (field: FieldKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
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
        <div className="flex flex-col justify-between mt-4 mb-6 gap-8">
          {children}
          {fields.map((field) => (
            <div className="w-full relative" key={field.key}>
              <Label
                className={`
                  absolute left-3.5 pointer-events-none text-base font-normal
                  transition-all duration-200 origin-left
                  ${
                    focus[field.key] || values[field.key]
                      ? "scale-90 -translate-y-3.5 translate-x-2 bg-white px-2 text-[#007da4]"
                      : "scale-100 translate-y-4 text-[rgb(107,114,128)]"
                  }
                `}
                style={{ maxWidth: "calc(100% - 24px)" }}
              >
                {field.label}
              </Label>

              {field.key !== "about" ? (
                <Input
                  value={values[field.key]}
                  variant="outline"
                  onChange={handleChange(field.key)}
                  onFocus={handleFocus(field.key)}
                  onBlur={handleBlur(field.key)}
                />
              ) : (
                <Textarea
                  value={values[field.key]}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      [field.key]: e.target.value,
                    }))
                  }
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
