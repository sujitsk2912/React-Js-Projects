import DashboardLayout from "../../Components/DashboardLayout";
import { MdEmail } from "react-icons/md";
import { IoChatbubble } from "react-icons/io5";
import SupportForm from "./Components/SupportForm";

const Support = () => {
  return (
    <div>
      <DashboardLayout title={"Support"}>
        <div className="flex flex-col gap-4 px-6 max-lg:px-1">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full gap-4 ">
            <div className=" h-fit w-full flex flex-col gap-4 p-2  rounded-lg">
              <MdEmail className="text-3xl text-violet-700" />
              <h2 className="font-semibold text-3xl">Contact Us</h2>
              <p className="text-sm max-w-md">
                Have a question or just want to know more? Feel free to reach
                out to us.
              </p>
            </div>
            <SupportForm />
          </div>

          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1 ">
            <div className="h-fit w-full flex flex-col gap-4 p-2 rounded-lg">
              <IoChatbubble className="text-3xl text-violet-700" />
              <h2 className="font-semibold text-3xl">Live Chat</h2>
              <p className="text-sm max-w-md">
                Don’t have time to wait for the answer? Chat with us now.
              </p>
            </div>

            <div className="bg-purple-700 text-white flex flex-col rounded-lg h-fit w-full p-4 gap-3">
              <span className="bg-white text-purple-700 px-2 py-1 rounded-full w-fit font-[600]">
                Contact
              </span>
              <h2 className="text-lg font-semibold max-w-lg max-sm:text-lg">
                Learn more about our real estate, mortgage, and corporate
                account services
              </h2>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Support;
