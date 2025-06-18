import { JSX } from "react";
import Button from "../ui/Buttons";
import Image from "next/image";

type SocialLinksItemType = {
  social: socialTypes;
  handleShowLinkForm: (social: socialTypes) => void;
};

export type socialTypes = {
  name: string;
  url?: string[];
  icon?: JSX.Element;
  image?: string;
};

const SocialLinksItem = ({
  social,
  handleShowLinkForm,
}: SocialLinksItemType) => {
  //   const shouldShowBox =
  //     Array.isArray(social.url) &&
  //     social.url.length === 1 &&
  //     social.url[0].trim() === "";

  //   if (!shouldShowBox) return null;

  return (
    <>
      <div
        className="social-link-item py-2 px-4 flex justify-between items-center bg-white cursor-pointer rounded-lg border border-[rgba(0,0,0,0.12)]"
        onClick={() => handleShowLinkForm(social)}
      >
        <div className="flex items-center gap-2 ">
          {social.icon ? (
            <div className="w-8 h-8 bg-black border border-[rgba(0,0,0,0.12)] rounded-[50%] flex items-center justify-center">
              {social.icon}
            </div>
          ) : (
            <div className="w-8 h-8">
              <Image
                src={social.image || "/icTapOnnLogo.svg"}
                alt={social.name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <p>{social.name}</p>
        </div>
        <Button
          variant="none"
          className="inline-flex items-center justify-center cursor-pointer text-center text-[1.5rem] text-[rgba(0,0,0,0.54)] p-2 rounded-[50%]"
        >
          <svg
            className="w-[1em] h-[1em] inline-block "
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="AddIcon"
            fill="currentColor"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
          </svg>
        </Button>
      </div>
    </>
  );
};

export default SocialLinksItem;
