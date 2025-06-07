import PersonalInfo from "@/components/profile/PersonalInfo";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <PersonalInfo />
    </div>
  );
};

export default page;
