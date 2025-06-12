import Image from "next/image";
import Label from "../ui/Label";
import { UserProfile } from "@/types/userProfile-type";
import Input from "../ui/Input";
import Button from "../ui/Buttons";
import { useRef } from "react";

type ProfileAvatarProps = {
  profile: UserProfile | null;
  onCoverPhotoChange: (file: File) => void;
};

const ProfileCoverPhoto = ({
  profile,
  onCoverPhotoChange,
}: ProfileAvatarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onCoverPhotoChange(file);
  };

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  return (
    <div className="flex items-center text-center justify-between flex-col gap-4 w-full">
      <div className="flex items-center justify-center relative bg-[#e0e0e0] border-2 border-[rgb(206,212,218)] rounded-2xl hover:border-[#007da4] aspect-[16 / 9] h-[170px] w-full transition-[border-color] duration-250 [ease-[cubic-bezier(0.4,0,0.2,1)]]">
        <Label className="cursor-pointer h-full w-full">
          {profile?.avatar_original ? (
            <Image
              src={profile?.avatar_original}
              alt={profile?.username}
              width={100}
              height={100}
              className="w-full h-full text-center object-cover rounded-2xl"
            />
          ) : (
            <div className="text-white flex items-center justify-center h-full ">
              <svg
                className="w-3/4 h-3/4 transition-[fill] duration-200 [ease-[cubic-bezier(0.4,0,0.2,1)]]
"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PersonIcon"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
            </div>
          )}
          <Input
            ref={inputRef}
            type="file"
            accept="image/jpeg, image/jpg, image/png, image/webp"
            className="hidden "
            onChange={handleFileChange}
          />
          <Button
            type="button"
            variant="none"
            className="inline-flex items-center cursor-pointer text-[rgba(0,0,0,0.54)] text-lg absolute -top-1.5 -right-1.5 bg-white w-8 h-8 rounded-[50%] p-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.1) ] transition-colors duration-150 ease-in-out z-50"
            onClick={handleEditClick}
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium taponn-dashboard-i1moyy"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="EditIcon"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
            </svg>
          </Button>
        </Label>
      </div>
      <div className="text-base font-normal leading-[1.5] text-[#191724]">
        Cover Photo
      </div>
    </div>
  );
};

export default ProfileCoverPhoto;
