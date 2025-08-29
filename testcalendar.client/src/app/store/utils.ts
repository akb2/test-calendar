import { ofType, type StateObservable } from "redux-observable";
import {
  map,
  Observable,
  tap,
  withLatestFrom,
  type OperatorFunction,
} from "rxjs";
import type {
  AppActions,
  CreateEffectCallback,
  EffectData,
  RootState,
} from "./types";

export function CreateEffect<A>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
): CreateEffectCallback<A>;

export function CreateEffect<A, B>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
): CreateEffectCallback<B>;

export function CreateEffect<A, B, C>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorC: OperatorFunction<B, C>,
): CreateEffectCallback<C>;

export function CreateEffect<A, B, C, D>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorC: OperatorFunction<B, C>,
  operatorD: OperatorFunction<C, D>,
): CreateEffectCallback<D>;

export function CreateEffect<A, B, C, D>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
  operatorB?: OperatorFunction<A, B>,
  operatorC?: OperatorFunction<B, C>,
  operatorD?: OperatorFunction<C, D>,
) {
  return (
    action$: Observable<AppActions>,
    state$: StateObservable<RootState>,
  ) => {
    const effect = action$.pipe(
      tap(console.log),
      ofType<AppActions, AppActions["type"], AppActions>(type),
      withLatestFrom(state$),
      map(([action, state]) => <EffectData>{ action, state }),
      operatorA,
    );

    if (operatorB) {
      if (operatorC) {
        if (operatorD) {
          return effect.pipe(operatorB, operatorC, operatorD);
        }

        return effect.pipe(operatorB, operatorC);
      }

      return effect.pipe(operatorB);
    }

    return effect;
  };
}
