import { ofType, type StateObservable } from "redux-observable";
import { map, Observable, withLatestFrom, type OperatorFunction } from "rxjs";
import type {
  AppActions,
  CreateEffectCallback,
  EffectData,
  RootState,
} from "./types";

export function CreateEffect<O extends AppActions>(
  type: AppActions["type"],
  operatorO: OperatorFunction<EffectData, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, O extends AppActions>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
  operatorO: OperatorFunction<A, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, O extends AppActions>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorO: OperatorFunction<B, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, C, O extends AppActions>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorC: OperatorFunction<B, C>,
  operatorO: OperatorFunction<C, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, C, D, O extends AppActions>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorC: OperatorFunction<B, C>,
  operatorD: OperatorFunction<C, D>,
  operatorO: OperatorFunction<D, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, C, D, E, O extends AppActions>(
  type: AppActions["type"],
  operatorA: OperatorFunction<EffectData, A>,
  operatorB: OperatorFunction<A, B>,
  operatorC: OperatorFunction<B, C>,
  operatorD: OperatorFunction<C, D>,
  operatorE: OperatorFunction<D, E>,
  operatorO: OperatorFunction<E, O>,
): CreateEffectCallback<O>;

export function CreateEffect<A, B, C, D, E, O extends AppActions>(
  type: AppActions["type"],
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
    const effect = action$.pipe(
      ofType<AppActions, AppActions["type"], AppActions>(type),
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
