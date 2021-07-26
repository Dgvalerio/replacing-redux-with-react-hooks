import React, { useEffect, useState } from 'react';

import { IProductsState } from '../types/interfaces';

let globalState: IProductsState | any = {};
let listeners: React.Dispatch<React.SetStateAction<typeof globalState>>[] = [];
let actions: any = {};

export const useStore = (
  shouldListen = true
): [typeof globalState, (actionIdentifier: string, payload: any) => void] => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier: string, payload: any) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions: any, initialState: any): void => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
