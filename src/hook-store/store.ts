import React, { useEffect, useState } from 'react';

let globalState = {};
let listeners: React.Dispatch<React.SetStateAction<typeof globalState>>[] = [];
let actions: any = {};

export const useStore = (): [
  typeof globalState,
  (actionIdentifier: string) => void
] => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier: string) => {
    const newState = actions[actionIdentifier](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions: any, initialState: any): void => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
