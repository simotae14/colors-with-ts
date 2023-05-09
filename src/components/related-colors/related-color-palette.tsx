import { Dispatch } from 'react';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { ColorActions } from '../../lib/color-state';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
  dispatch: Dispatch<ColorActions>;
};

const RelatedColorPalette = ({
  title,
  hexColors,
  dispatch,
}: RelatedColorPaletteProps) => {
  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="w-full h-full"
              onClick={() => dispatch({
                type: 'update-hex-color',
                payload: {
                  hexColor
                }
              })
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
