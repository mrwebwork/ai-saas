import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl">Dashboard Page (Protected)</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
