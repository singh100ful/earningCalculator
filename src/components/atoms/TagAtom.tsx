import * as React from 'react';
import {Pressable, PressableProps} from 'react-native';
import {Colors} from '../../themes/Color';
import {defaultDimensions} from '../../themes/metrics';
import {TextAtom} from './TextAtom';

interface TagAtomProps extends PressableProps {
  title: string;
  selected: boolean;
}

export const TagAtom: React.FC<TagAtomProps> = ({title, selected, ...rest}) => {
  return (
    <Pressable
      {...rest}
      style={{
        backgroundColor: selected ? Colors.primaryCTA : Colors.gray,
        borderRadius: defaultDimensions.baseScale,
        paddingHorizontal: defaultDimensions.baseScale,
        paddingVertical: defaultDimensions.mediumScale,
      }}>
      <TextAtom
        title={title}
        style={{
          color: selected ? Colors.white : Colors.primaryTextOpacity,
        }}
      />
    </Pressable>
  );
};
