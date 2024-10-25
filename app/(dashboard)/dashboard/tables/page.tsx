import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/dashboard/Tables/TableOne";
import TableThree from "@/components/dashboard/Tables/TableThree";
import TableTwo from "@/components/dashboard/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/dashboard/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
