import {
  combineReducers,
  configureStore,
  type Reducer,
  type ReducersMapObject,
} from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { calendarReducer } from "./calendar/slice";
import { rootEpic } from "./epics";
import type { AppAction, RootState } from "./types";

const reducers: ReducersMapObject<RootState> = {
  calendar: calendarReducer,
};

const rootReducer: Reducer<RootState> = combineReducers(reducers);
const epicMiddleware = createEpicMiddleware<AppAction, AppAction, RootState>();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
