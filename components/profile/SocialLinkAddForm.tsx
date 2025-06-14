import Button from "../ui/Buttons";
import Input from "../ui/Input";

const SocialLinkAddForm = () => {
  return (
    <div className="fixed z-[99999] inset-0">
      <div className="fixed flex items-center justify-center inset-0 bg-[#00000080] -z-[1]"></div>
      <div className="h-full flex justify-center items-center">
        <div className="text-[rgb(25,23,36)] flex flex-col max-w-[900px] w-[900px] h-[600px] max-h-[80vh] px-8 py-6 m-8 rounded-2xl bg-white">
          <div className="flex items-center justify-between ">
            <h6 className="text-base">Website</h6>
            <Button
              variant="none"
              className="text-[rgba(0,0,0,0.54)] rounded-[50%] p-2 cursor-pointer hover:bg-[rgba(0,0,0,0.04)]"
            >
              <svg
                className="w-[1em] h-[1em] text-[1.5rem] "
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CloseRoundedIcon"
                fill="currentcolor"
              >
                <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"></path>
              </svg>
            </Button>
          </div>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default SocialLinkAddForm;
