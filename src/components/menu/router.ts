import type { MenuProps } from "antd";

export const routes: MenuProps["items"] = [
  {
    label: "All",
    key: "/",
  },
  {
    label: "Active",
    key: "/active",
  },
  {
    label: "Completed",
    key: "/completed",
  },
];
