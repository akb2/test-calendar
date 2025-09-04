import { ofType, type StateObservable } from "redux-observable";
import { map, Observable, withLatestFrom, type OperatorFunction } from "rxjs";
import type { TypeOrArray } from "../models/App";
import { AnyToArray } from "../utils/App";
import type {
  AppActions,
  CreateEffectCallback,
  EffectData,
  RootState,
} from "./types";

export function CreateEffect<O extends AppActions>(
  mixedTypes: TypeOrArray<AppActions["type"]>,
  operatorO: OperatorFunction<EffectData, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, O extends AppActions>(
  mixedTypes: TypeOrArray<AppActions["type"]>,
  operatorA: OperatorFunction<EffectData, A>,
  operatorO: OperatorFunction<A, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, O extends AppActions>(
  mixedTypes: TypeOrArray<AppActions["type"]>,
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorO: OperatorFunction<B, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, C, O extends AppActions>(
  mixedTypes: TypeOrArray<AppActions["type"]>,
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorC: OperatorFunction<B, C>,
  operatorO: OperatorFunction<C, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, C, D, O extends AppActions>(
  mixedTypes: TypeOrArray<AppActions["type"]>,
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorC: OperatorFunction<B, C>,
  operatorD: OperatorFunction<C, D>,
  operatorO: OperatorFunction<D, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, C, D, E, O extends AppActions>(
  mixedTypes: TypeOrArray<AppActions["type"]>,
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorC: OperatorFunction<B, C>,
  operatorD: OperatorFunction<C, D>,
  operatorE: OperatorFunction<D, E>,
  operatorO: OperatorFunction<E, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, C, D, E, O extends AppActions>(
  mixedTypes: TypeOrArray<AppActions["type"]>,
  operatorA: OperatorFunction<EffectData, A>,
  operatorB?: OperatorFunction<A, B>,
  operatorC?: OperatorFunction<B, C>,
  operatorD?: OperatorFunction<C, D>,
  operatorE?: OperatorFunction<D, E>,
  operatorO?: OperatorFunction<E, O>,
) {
  return (
    action$: Observable<AppActions>,
    state$: StateObservable<RootState>,
  ) => {
    const types = AnyToArray(mixedTypes);
    const effect = action$.pipe(
      ofType<AppActions, AppActions["type"], AppActions>(...types),
      withLatestFrom(state$),
      map<[AppActions, RootState], EffectData>(([action, state]) => ({
        action,
        state,
      })),
      operatorA,
    );

    if (operatorB) {
      if (operatorC) {
        if (operatorD) {
          if (operatorE) {
            if (operatorO) {
              return effect.pipe(
                operatorB,
                operatorC,
                operatorD,
                operatorE,
                operatorO,
              );
            }

            return effect.pipe(operatorB, operatorC, operatorD, operatorE);
          }

          return effect.pipe(operatorB, operatorC, operatorD);
        }

        return effect.pipe(operatorB, operatorC);
      }

      return effect.pipe(operatorB);
    }

    return effect;
  };
}
