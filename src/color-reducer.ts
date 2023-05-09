import { rgb, hsl } from 'color-convert';
import { ColorActions, ColorState } from './lib/color-state';

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

const colorReducer = (
  state: ColorState = initialState,
  action: ColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return {
      ...state,
      hexColor,
    };
  }

  if (action.type === 'update-rgb-color') {
    const hexColor = `#${rgb.hex(action.payload.rgb)}`;
    return {
      ...state,
      hexColor,
    };
  }

  if (action.type === 'update-hsl-color') {
    const hexColor = `#${hsl.hex(action.payload.hsl)}`;
    return {
      ...state,
      hexColor,
    };
  }

  return state;
};

export default colorReducer;
