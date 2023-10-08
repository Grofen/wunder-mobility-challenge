import { Dispatch, SetStateAction, useCallback, useState } from "react";

const getStoredValue = (key: string): unknown => {
  try {
    const value = localStorage.getItem(key);

    if (typeof value === "string") {
      return JSON.parse(value);
    }

    return undefined;
  } catch {
    // Reading or parsing failed, ignore it.
    return undefined;
  }
};

export type StoredState<T> = T | undefined;
export type StoredStateUpdater<T> = SetStateAction<StoredState<T>>;
export type SetStoredState<T> = Dispatch<StoredStateUpdater<T>>;
export type UseStoredState<T> = [StoredState<T>, SetStoredState<T>];

const useStoredState = <T>(
  key: string,
  initialValue?: StoredState<T> | (() => StoredState<T>)
): UseStoredState<T> => {
  const [value, _setValue] = useState(() => {
    const storedValue = getStoredValue(key) as StoredState<T>;

    if (storedValue == null) {
      return initialValue instanceof Function ? initialValue() : initialValue;
    }

    return storedValue;
  });

  const setValue = useCallback(
    (nextValue: StoredStateUpdater<T>): void => {
      _setValue((current) => {
        if (nextValue instanceof Function) {
          nextValue = nextValue(current);
        }

        try {
          if (nextValue === undefined) {
            // Allow for saving some memory by removing the key entirely if the
            // value is undefined.
            window.localStorage.removeItem(key);
          } else {
            window.localStorage.setItem(key, JSON.stringify(nextValue));
          }
        } catch {
          // Nothing we can do about it.
        }

        return nextValue;
      });
    },
    [key]
  );

  return [value, setValue];
};

export default useStoredState;
