import { ofType, type StateObservable } from "redux-observable";
import { map, withLatestFrom, type Observable } from "rxjs";
import type { CalendarAction } from "./calendar/types";
import type { RootState } from "./types";

export const CreateEffect =
  <T>(
    type: CalendarAction["type"],
    callback: (data: { action: CalendarAction; state: RootState }) => T,
  ) =>
  (action$: Observable<CalendarAction>, state$: StateObservable<RootState>) =>
    action$.pipe(
      ofType(type),
      withLatestFrom(state$),
      map(([action, state]) => callback({ action, state })),
    );
