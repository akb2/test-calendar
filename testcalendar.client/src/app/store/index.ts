import {
  combineReducers,
  configureStore,
  type Reducer,
  type ReducersMapObject,
} from "@reduxjs/toolkit";
import { calendarReducer } from "./calendar/slice";
import type { RootState } from "./types";

const reducers: ReducersMapObject<RootState> = {
  calendar: calendarReducer,
};

const rootReducer: Reducer<RootState> = combineReducers(reducers);

export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  reducer: rootReducer,
});
