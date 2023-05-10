import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import colorReducer, { initialState } from "./lib/color-reducer";

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

// default value
export const ColorContext = createContext<ColorContextState>({
  hexColor: '#FFADEF'
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren)  => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  const hexColor = state.hexColor;

  return (
    <ColorContext.Provider 
      value={{
        hexColor,
        dispatch
      }
    }>
      {children}
    </ColorContext.Provider>
  );
}