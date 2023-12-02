import { configureStore } from "@reduxjs/toolkit";
import controlledFormSlice from "./controlledFormSlice";
import uncontrolledFormSlice from "./uncontrolledFormSlice";

export const store = configureStore({
  reducer: {
    controlledForm: controlledFormSlice,
    uncontrolledForm: uncontrolledFormSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
