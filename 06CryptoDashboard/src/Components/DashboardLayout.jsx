import Sidenav from "./Sidenav";
import Topnav from "./Topnav";

const DashboardLayout = ({ title, children }) => {
  return (
    <>
      <main>
        <div className="flex">
          <div className="max-lg:hidden">
            <Sidenav />
          </div>
          <div className="w-full">
            <Topnav title={title} />
            <section className="bg-gray-100  w-full min-h-[calc(100vh-56px)] py-4">
              <div className="max-w-[95%] m-auto h-auto">{children}</div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
