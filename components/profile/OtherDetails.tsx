import { Dispatch, SetStateAction, useState } from "react";
import Input from "../ui/Input";
import { UserProfile } from "@/types/userProfile-type";
import Label from "../ui/Label";
import { X } from "lucide-react";

type FieldKey = "city" | "state" | "country" | "area" | "industry";

type OtherDetailsType = {
  activeProfile: UserProfile | null;
  profile: UserProfile | null;
  setProfile: Dispatch<SetStateAction<UserProfile | null>>;
};

const fields: { key: FieldKey; label: string }[] = [
  { key: "city", label: "City" },
  { key: "state", label: "State" },
  { key: "country", label: "Country" },
  { key: "area", label: "Address" },
  { key: "industry", label: "Industry" },
];

const OtherDetails = ({
  profile,

  setProfile,
}: OtherDetailsType) => {
  const [focus, setFocus] = useState<Record<FieldKey, boolean>>({
    city: false,
    state: false,
    country: false,
    area: false,
    industry: false,
  });
  const [skillFocus, setSkillFocus] = useState(false);
  const [serviceFocus, setServiceFocus] = useState(false);

  const [skill, setSkill] = useState("");
  const [service, setService] = useState("");

  const values = {
    city: profile?.city || "",
    state: profile?.state || "",
    country: profile?.country || "",
    area: profile?.area || "",
    industry: profile?.industry || "",
  };

  const handleChange =
    (field: FieldKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
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

  function isNonEmpty(val: string | string[]) {
    if (Array.isArray(val)) {
      return val.some((v) => typeof v === "string" && v.trim().length > 0);
    }
    return typeof val === "string" && val.trim().length > 0;
  }

  function addSkill() {
    const newSkill = skill.trim();
    if (!newSkill) return;
    if (newSkill) {
      setProfile((prev) => {
        if (!prev) return prev;
        if (prev.skills.includes(newSkill)) return prev;
        return {
          ...prev,
          skills: [...prev.skills, newSkill],
        };
      });
    }
  }

  function addService() {
    const newService = service.trim();
    if (!newService) return;
    if (newService) {
      setProfile((prev) => {
        if (!prev) return prev;
        if (prev.services.includes(newService)) return prev;
        return {
          ...prev,
          services: [...prev.services, newService],
        };
      });
    }
  }

  function removeSkill(skillToRemove: string) {
    setProfile((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        skills: prev.skills.filter((skill: string) => skill !== skillToRemove),
      };
    });
  }

  function removeService(serviceToRemove: string) {
    setProfile((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        services: prev.services.filter(
          (service: string) => service !== serviceToRemove
        ),
      };
    });
  }

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSkill(e.target.value);
  };

  const handleSkillFocus = () => {
    setSkillFocus(true);
  };

  const handleSkillBlur = () => {
    setSkillFocus(false);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setService(e.target.value);
  };

  const handleServiceFocus = () => {
    setServiceFocus(true);
  };

  const handleServiceBlur = () => {
    setServiceFocus(false);
  };

  return (
    <div className="p-6 rounded-2xl ">
      <header>
        <h5 className="text-xl leading-[1.334] text-[#1f2937] font-medium ">
          Other Details
        </h5>
        <hr
          className="mt-4 border border-[#0000001f] h-full"
          style={{ borderBottomWidth: "thin" }}
        />
      </header>
      <div className="w-full">
        <div className="flex flex-col justify-between mt-4 gap-3.5">
          {fields.map((field) => (
            <div className="w-full relative" key={field.key}>
              <Label
                className={`
                  absolute left-3.5 pointer-events-none text-base font-normal
                  transition-all duration-200 origin-left
                  ${
                    focus[field.key] || isNonEmpty(values[field.key])
                      ? "scale-90 -translate-y-3.5 translate-x-2 bg-white px-2 text-[#007da4]"
                      : "scale-100 translate-y-4 text-[rgb(107,114,128)]"
                  }
                `}
                style={{ maxWidth: "calc(100% - 24px)" }}
              >
                {field.label}
              </Label>

              <Input
                value={values[field.key]}
                variant="outline"
                onChange={handleChange(field.key)}
                onFocus={handleFocus(field.key)}
                onBlur={handleBlur(field.key)}
              />
            </div>
          ))}
          <div className="w-full relative">
            <div className="space-y-2">
              {profile?.skills && profile?.skills?.length > 0 && (
                <>
                  <Label className="text-[#007da4] mb-2 inline-block">
                    Skills
                  </Label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {profile?.skills.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[rgba(4,206,250,0.1)] text-[rgb(4,206,250)] border border-[rgba(4,206,250,0.3)]"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-2 hover:text-red-400"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </>
              )}
              <Label
                className={`
                absolute left-3.5 pointer-events-none text-base font-normal
                transition-all duration-200 origin-left
                ${
                  skillFocus || skill.trim().length > 0
                    ? "scale-90 -translate-y-3.5 translate-x-2 bg-white px-2 text-[#007da4]"
                    : "scale-100 translate-y-4 text-[rgb(107,114,128)]"
                }
              `}
                style={{ maxWidth: "calc(100% - 24px)" }}
              >
                Skill
              </Label>

              <Input
                value={skill}
                variant="outline"
                onChange={(e) => handleSkillChange(e)}
                onFocus={handleSkillFocus}
                onBlur={handleSkillBlur}
                onKeyUp={(e) => e.key === "Enter" && addSkill()}
              />
            </div>
          </div>
          <div className="w-full relative">
            <div className="space-y-2">
              {profile?.services && profile?.services?.length > 0 && (
                <>
                  <Label className="text-[#007da4] mb-2 inline-block">
                    Services
                  </Label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {profile?.services.map((service: string, index: number) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[rgba(4,206,250,0.1)] text-[rgb(4,206,250)] border border-[rgba(4,206,250,0.3)]"
                      >
                        {service}
                        <button
                          onClick={() => removeService(service)}
                          className="ml-2 hover:text-red-400"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </>
              )}
              <Label
                className={`
                absolute left-3.5 pointer-events-none text-base font-normal
                transition-all duration-200 origin-left
                ${
                  serviceFocus || service.trim().length > 0
                    ? "scale-90 -translate-y-3.5 translate-x-2 bg-white px-2 text-[#007da4]"
                    : "scale-100 translate-y-4 text-[rgb(107,114,128)]"
                }
              `}
                style={{ maxWidth: "calc(100% - 24px)" }}
              >
                Services
              </Label>

              <Input
                value={service}
                variant="outline"
                onChange={(e) => handleServiceChange(e)}
                onFocus={handleServiceFocus}
                onBlur={handleServiceBlur}
                onKeyUp={(e) => e.key === "Enter" && addService()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
