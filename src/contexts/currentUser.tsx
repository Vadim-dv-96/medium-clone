import React, { ReactNode } from 'react';
import { useState } from 'react';

type ProviderPropsType = {
  children: JSX.Element | JSX.Element[];
}; // или { children: ReactNode }

export type StateType = {
  isLoading: boolean;
  isLoggedIn: null;
  currentUser: null;
};
export type CurrentUserContextProps = [
  state: StateType,
  setState: (value: ((prev: StateType) => any) | StateType) => void
];

export const CurrentUserContext = React.createContext<CurrentUserContextProps>(
  null as unknown as CurrentUserContextProps
);

export const CurrentUserProvider = ({ children }: ProviderPropsType) => {
  const [state, setState] = useState<StateType>({
    isLoading: false,
    isLoggedIn: null,
    currentUser: null,
  });

  return (
    <CurrentUserContext.Provider value={[state, setState]}>
      {children}
    </CurrentUserContext.Provider>
  );
};
