import { StatusType } from "./redux";
export interface ChildrenComponent {
  children: React.ReactNode | React.ReactElement;
}

export interface StatusProps {
  status: "all" | "active" | "Completed";
}
