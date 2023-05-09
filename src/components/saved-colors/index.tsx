import { Dispatch, useState } from 'react';
import id from 'lodash.uniqueid';
import AddSavedColor from './add-saved-color';
import SavedColor from './saved-color';
import { ColorActions } from '../../lib/color-state';

type SavedColorsProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>
};

const saved = [
  { id: id(), name: '1989 Miami Hotline', hexColor: '#dd3366' },
  { id: id(), name: 'Blue Fire', hexColor: '#00aadd' },
];

const SavedColors = ({ hexColor, dispatch }: SavedColorsProps) => {
  const [savedColors, setSavedColors] = useState(saved);

  return (
    <section className="flex flex-col w-full gap-4 sm:col-span-2">
      <h3>Save Color</h3>
      <AddSavedColor
        onSave={(name) =>
          setSavedColors((colors) => [...colors, { id: id(), name, hexColor }])
        }
      />
      {savedColors.map(({ id, name, hexColor }) => {
        return (
          <SavedColor
            key={id}
            name={name}
            hexColor={hexColor}
            onRemove={() =>
              setSavedColors((colors) =>
                colors.filter((color) => color.id !== id),
              )
            }
            onClick={() => dispatch({
              type: 'update-hex-color',
              payload: {
                hexColor
              }
            })}
          />
        );
      })}
    </section>
  );
};

export default SavedColors;
