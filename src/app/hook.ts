import { PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Activity } from "../model";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: (arg0?: PayloadAction<Activity>) => AppDispatch =
  useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
