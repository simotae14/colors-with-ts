import { Dispatch } from 'react';
import ColorName from './color-name';
import HexToCMYK from './to-cmyk';
import HexToHSL from './to-hsl';
import HexToHSV from './to-hsv';
import HexToRGB from './to-rgb';
import { ColorActions } from '../../lib/color-state';

type AdjustColorsProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const AdjustColors = ({ hexColor, dispatch }: AdjustColorsProps) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h3>Adjust Colors</h3>
      <HexToRGB dispatch={dispatch} hexColor={hexColor} />
      <HexToHSL dispatch={dispatch} hexColor={hexColor} />
      <HexToHSV dispatch={dispatch} hexColor={hexColor} />
      <HexToCMYK hexColor={hexColor} />
      <ColorName hexColor={hexColor} />
    </div>
  );
};

export default AdjustColors;
