type HexColor = `#${string}`;

type RGBString = `rgb(${number}, ${number}, ${number})`;

type ColorFormats = 'rgb' | 'hex' | 'hsl' | 'hsv';
type ActionTypes = `update-${ColorFormats}-color`;

const isHexColor = (s: string): s is HexColor => {
  return s.startsWith('#');
};

export type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

export type UpdateHSLColorAction = {
  type: 'update-hsl-color';
  payload: {
    hsl: [number, number, number];
  };
};

export type ColorState = {
  hexColor: string;
};

export type ColorActions =
  | UpdateHexColorAction
  | UpdateRGBColorAction
  | UpdateHSLColorAction;
