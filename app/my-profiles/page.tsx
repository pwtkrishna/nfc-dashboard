import ProfileList from "@/components/manage-profiles/ProfileList";
import ProfileListHeader from "@/components/manage-profiles/ProfileListHeader";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="p-6 bg-[#f5f5f5] overflow-auto flex-[1]">
        <ProfileListHeader />
        <ProfileList />
      </div>
    </div>
  );
};

export default page;
