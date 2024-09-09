import React, { createContext, useReducer, ReactNode } from 'react';

type StateType = { section: string };
type ActionType = { section: string };

export type SectionContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export const SectionContext = createContext<SectionContextType>({
  state: { section: 'home' },
  dispatch: () => {},
});

const INITIAL_STATE: StateType = { section: 'home' };

const sectionReducer = (state: StateType, action: ActionType): StateType => {
  if (action.section) {
    return { section: action.section };
  }
  return state; // Default return state if no action is provided
};

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(sectionReducer, INITIAL_STATE);

  return (
    <SectionContext.Provider value={{ state, dispatch }}>
      {children}
    </SectionContext.Provider>
  );
};
