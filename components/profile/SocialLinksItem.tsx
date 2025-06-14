import { JSX } from "react";
import Button from "../ui/Buttons";

type SocialLinksItemType = {
  social: socialTypes;
};

type socialTypes = {
  name: string;
  url?: string[] | undefined;
  icon: JSX.Element;
};

const SocialLinksItem = ({ social }: SocialLinksItemType) => {
  //   const shouldShowBox =
  //     Array.isArray(social.url) &&
  //     social.url.length === 1 &&
  //     social.url[0].trim() === "";

  //   if (!shouldShowBox) return null;

  return (
    <>
      <div
        className="py-2 px-4 flex justify-between items-center bg-white cursor-pointer rounded-lg border border-[rgba(0,0,0,0.12)]"
        style={{ width: "calc(33.3333% - 0.666667rem)" }}
      >
        <div className="flex items-center gap-2 ">
          <div className="w-8 h-8 bg-black border border-[rgba(0,0,0,0.12)] rounded-[50%] flex items-center justify-center">
            {social.icon}
          </div>
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
