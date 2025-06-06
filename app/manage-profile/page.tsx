import Sidebar from "@/components/Sidebar";
import Button from "@/components/ui/Buttons";

const page = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="p-6 bg-[#f5f5f5] overflow-auto flex-[1]">
        <header>
          <div className="flex items-center justify-between">
            <h2 className="text-[1.5rem] leading-[1.235] font-semibold">
              My Profiles
            </h2>
            <div>
              <Button className="flex items-center bg-[#00A8CC] text-white text-[0.8125rem] font-medium h-10 hover:bg-[#0891b2] min-[64px] rounded-lg py-3 px-4">
                <span className="text-lg mr-2 -ml-0.5 text-white">
                  <svg
                    className="text-lg w-4 text-white"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="AddIcon"
                    fill="#fff"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
                  </svg>
                </span>
                Add New
              </Button>
            </div>
          </div>
        </header>
        <div></div>
      </div>
    </div>
  );
};

export default page;
