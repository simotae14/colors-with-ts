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

export type ColorState = {
  hexColor: string;
};

export type ColorActions = UpdateHexColorAction | UpdateRGBColorAction;
