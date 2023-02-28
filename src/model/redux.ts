export interface Activity {
  id: string;
  activity: string;
  status: StatusType;
}
export type StatusType = "active" | "completed" | "deleted";
