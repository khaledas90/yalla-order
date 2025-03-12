import { FC, PropsWithChildren } from "react";
import Client from "./client";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Client>{children}</Client>;
};

export default DashboardLayout;
