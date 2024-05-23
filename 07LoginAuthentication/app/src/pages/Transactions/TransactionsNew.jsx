import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import TransactionTable from "./Components/TransactionTable";

const TransactionsNew = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposite",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 231,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashboardLayout title={"Transaction"}>
      <div className="flex justify-end mb-4 pe-4">
        <button className="bg-purple-700 text-white py-2 px-3 flex justify-center gap-2 items-center font-medium rounded-lg hover:bg-purple-800">
          <PiDownloadSimpleBold className="text-xl" />
          Export CSV
        </button>
      </div>
      <div className="relative w-full h-auto p-4 bg-white  rounded-lg flex justify-between">
        <Tabs className="w-full">
          <TabList className="flex gap-8 overflow-y-hidden">
            {tabs.map((tab) => (
              <Tab key={tab.name} className="flex gap-2">
                <h3 className="text-[14px] font-[500] ">{tab.name}</h3>
                <span className=" bg-gray-200 px-[10px] py-[2px]  rounded-full text-xs font-[500]">
                  {tab.count}
                </span>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <div className="absolute right-4 max-xl:hidden">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <IoSearchOutline className="text-xl text-gray-400 " />
              </div>
              <input
                type="search"
                className=" min-w-[18rem] block p-4 pl-10 max-h-8 text-sm text-gray-600 placeholder-gray-400 border-none rounded-md focus:ring-0"
                placeholder="Search by ID or destination"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TransactionsNew;
