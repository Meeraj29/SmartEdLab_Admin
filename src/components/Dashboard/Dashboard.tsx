import DashboardAiandCourse from "./DashboardAiandCourse";
import DashboardAiSubscriptionLiveClass from "./DashboardAiSubscriptionLiveClass";
import DashboardGraph from "./DashboardGraph";
import DashboardLiveActivity from "./DashboardLiveActivity";
import Dashboardstatic from "./Dashboardstatic";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <Dashboardstatic />
      <DashboardGraph />
      <DashboardAiandCourse />
      <DashboardAiSubscriptionLiveClass />
      <DashboardLiveActivity />
    </div>
  );
};

export default Dashboard;
