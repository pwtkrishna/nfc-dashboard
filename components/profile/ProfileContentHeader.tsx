import { tabs } from "@/data/tabs";
import TabButton, { Tab } from "../TabButton";

type ProfileContentHeaderProps = {
  selectedTab: Tab;
  setSelectedTab: (tab: Tab) => void;
};

const ProfileContentHeader = ({
  selectedTab,
  setSelectedTab,
}: ProfileContentHeaderProps) => {
  return (
    <div
      className="inline-flex bg-white overflow-hidden border border-[#0000001f]"
      style={{ borderRadius: "12px 12px 0px 0px" }}
    >
      {tabs.map((tab, idx) => (
        <TabButton
          key={tab.key}
          label={
            selectedTab === tab.key
              ? tab.key.charAt(0).toUpperCase() + tab.key.slice(1)
              : tab.label
          }
          isActive={selectedTab === tab.key}
          onClick={() => setSelectedTab(tab.key)}
          className={
            idx === 0 ? "" : idx === tabs.length - 1 ? "rounded-tr-[12px]" : ""
          }
          style={{
            borderRadius:
              idx === 0
                ? "12px 0 0 0"
                : idx === tabs.length - 1
                ? "0 12px 0 0"
                : "0",
            borderRightWidth: idx === tabs.length - 1 ? 0 : undefined,
          }}
        />
      ))}
    </div>
  );
};

export default ProfileContentHeader;
