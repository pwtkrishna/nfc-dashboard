import SocialLinksItem from "./SocialLinksItem";
import LinkAdded from "./LinkAdded";
import { getSocialLinks } from "@/utils/socialLinks";
import { UserProfile } from "@/types/userProfile-type";
import SocialLinkAddForm from "./SocialLinkAddForm";

type SocialLinksType = {
  profile: UserProfile | null;
};

const SocialLinks = ({ profile }: SocialLinksType) => {
  const socialLinks = getSocialLinks(profile);
  const visibleSocialLinks = socialLinks.filter(
    (social) =>
      Array.isArray(social.url) &&
      social.url.length === 1 &&
      social.url[0].trim() === ""
  );

  return (
    <div className="p-6 rounded-2xl ">
      {/* <SocialLinkAddForm /> */}
      <header>
        <h5 className="text-xl leading-[1.334] text-[#1f2937] font-medium ">
          Links
        </h5>
        <hr
          className="mt-4 border border-[#0000001f] h-full"
          style={{ borderBottomWidth: "thin" }}
        />
      </header>
      <div className="pt-4 pb-4 flex flex-col gap-6 w-full">
        <div className="w-full max-w-full flex flex-col justify-between gap-6">
          <div className="flex justify-between gap-6">
            <h6 className="text-base font-medium leading-[1.6] text-[#191724]">
              Link Options
            </h6>
            <div className="max-w-full text-[0.812rem] inline-flex items-center justify-center h-8 bg-[rgb(0,168,204)] text-white rounded-2xl cursor-pointer hover:bg-[#191724] transition-color duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-lg">
              <span className="px-3 pb-1">Add More Link</span>
            </div>
          </div>
          <div className="flex gap-4 grow flex-wrap w-full max-w-full ">
            {visibleSocialLinks.map((social, index) => (
              <SocialLinksItem key={index} social={social} />
            ))}
          </div>
        </div>
        {visibleSocialLinks.length > 0 && (
          <hr
            className="border border-[#0000001f]"
            style={{ borderBottomWidth: "thin" }}
          />
        )}
        <div className="flex flex-col gap-4">
          {visibleSocialLinks.length > 0 &&
            visibleSocialLinks.map((social, index) => (
              <LinkAdded key={index} social={social} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
