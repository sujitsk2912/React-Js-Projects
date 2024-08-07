import PortfolioSection from "./Components/PortfolioSection";
import DashboardLayout from "../../Components/DashboardLayout";
import PriceSection from "./Components/PriceSection";
import LoanAndContactSection from "./Components/LoanAndContactSection";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title={"Dashboard"}>
        <div className="flex flex-col gap-4">
          <PortfolioSection />
          <PriceSection />
          <LoanAndContactSection />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
