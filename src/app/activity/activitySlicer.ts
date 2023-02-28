import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Activity } from "../../model";
import { v4 as uuidv4 } from "uuid";

interface activities {
  activities: Activity[];
}
const initialState: activities = {
  activities: [],
};
export const activitySlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    createActitivity: (state, action: PayloadAction<Activity>) => {
      const { activities } = state;
      state.activities = [...activities, action.payload];
    },
    editActivity: (state, action: PayloadAction<Activity>) => {
      const { activities } = state;
      const { id, activity, status } = action.payload;

      const newList = activities.map((task: Activity) => {
        if (task.id !== id) {
          return task;
        } else {
          return { ...task, status };
        }
      });
      state.activities = newList;
    },
    deleteActivity: (state, action: PayloadAction<Activity>) => {
      const { activities } = state;
      const { id, activity, status } = action.payload;

      const newList = activities.map((task: Activity) => {
        if (task.id !== id) {
          return task;
        } else {
          return { ...task, status };
        }
      });
      state.activities = newList;
    },
    deleteAllActivity: (state) => {
      state.activities = [];
    },
  },
});
export const {
  createActitivity,
  editActivity,
  deleteActivity,
  deleteAllActivity,
} = activitySlice.actions;
export const selectActivity = (state: any) => state;

export default activitySlice.reducer;
