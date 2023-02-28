import { configureStore } from "@reduxjs/toolkit";
import activitySlicer from "./activity/activitySlicer";

const store = configureStore({
  reducer: {
    activities: activitySlicer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
