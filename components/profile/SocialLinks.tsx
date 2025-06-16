import { UserProfile } from "@/types/userProfile-type";

import SocialLinksItem, { socialTypes } from "./SocialLinksItem";
import LinkAdded from "./LinkAdded";
import { getSocialLinks } from "@/utils/socialLinks";

type SocialLinksType = {
  profile: UserProfile | null;
  userLinks: socialTypes[];
  showLinkForm: boolean;
  selectedSocial: socialTypes | null;
  handleShowLinkForm: (social: socialTypes) => void;
  handleCloseLinkForm: () => void;
  handleSaveLink: (url: string) => void;
};

const SocialLinks = ({
  profile,
  userLinks,
  handleShowLinkForm,
}: SocialLinksType) => {
  const socialLinks = getSocialLinks(profile);

  const normalizedSocialLinks = socialLinks.map((social) => ({
    ...social,
    url: Array.isArray(social.url)
      ? social.url
      : social.url
      ? [social.url]
      : [""],
  }));

  const visibleSocialLinks = normalizedSocialLinks.filter(
    (social) =>
      Array.isArray(social.url) &&
      social.url.length === 1 &&
      social.url[0].trim() === ""
  );

  const apiLinks = normalizedSocialLinks.filter(
    (social) =>
      Array.isArray(social.url) &&
      social.url.length > 0 &&
      social.url[0].trim() !== ""
  );

  const combinedLinks = [
    ...userLinks,
    ...apiLinks.filter(
      (apiLink) => !userLinks.some((userLink) => userLink.name === apiLink.name)
    ),
  ];

  const addedLinkNames = new Set(combinedLinks.map((link) => link.name));

  const availableSocialLinks = normalizedSocialLinks.filter((social) => {
    console.log(social);

    return !addedLinkNames.has(social.name);
  });

  return (
    <>
      <div className="p-6 rounded-2xl ">
        <div className="pt-4 pb-4 flex flex-col gap-6 w-full">
          <div className="w-full max-w-full flex flex-col justify-between gap-6">
            <div className="flex gap-4 grow flex-wrap w-full max-w-full ">
              {availableSocialLinks.map((social, index) => (
                <SocialLinksItem
                  key={index}
                  social={social}
                  handleShowLinkForm={handleShowLinkForm}
                />
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
            {combinedLinks.map((social, index) => (
              <LinkAdded key={index} social={social} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
