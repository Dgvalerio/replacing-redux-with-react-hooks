import React, { useEffect, useState } from 'react';

const globalState = {};
let listeners: React.Dispatch<React.SetStateAction<typeof globalState>>[] = [];
const actions = {};

const useStore = () => {
  const setState = useState(globalState)[1];

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);
};
