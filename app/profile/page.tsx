import PageHeader from "@/components/PageHeader";
import ProfileContent from "@/components/profile/ProfileContent";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <>
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex flex-col p-6 bg-[#f5f5f5] overflow-auto flex-[1]">
          <header>
            <PageHeader />
          </header>
          <ProfileContent />
        </div>
      </div>
    </>
  );
};

export default page;
