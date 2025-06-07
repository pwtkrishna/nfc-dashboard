import PageHeader from "../PageHeader";
import Button from "../ui/Buttons";

const ProfileListHeader = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <PageHeader />
        <div>
          <Button variant="filled">
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
  );
};

export default ProfileListHeader;
