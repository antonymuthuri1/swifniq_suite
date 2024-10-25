import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/dashboard/Layouts/DefaultLaout";
import AlertError from "@/components/dashboard/Alerts/AlertError";
import AlertWarning from "@/components/dashboard/Alerts/AlertWarning";
import AlertSuccess from "@/components/dashboard/Alerts/AlertSuccess";

export const metadata: Metadata = {
  title: "Next.js Alerts Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Alerts page for NextAdmin Dashboard Kit",
  // other metadata
};

const Alerts = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Alerts" />

      <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          <AlertWarning />
          <AlertSuccess />
          <AlertError />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Alerts;
