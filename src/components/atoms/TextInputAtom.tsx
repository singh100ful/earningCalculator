import * as React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {TextAtom} from './TextAtom';
import {Colors} from '../../themes/Color';
import {defaultDimensions} from '../../themes/metrics';
import {defaultTexts} from '../../themes/Fonts';

interface TextInputAtomProps extends TextInputProps {
  label?: string;
}

export const TextInputAtom: React.FC<TextInputAtomProps> = ({
  label,
  ...rest
}) => {
  return (
    <View>
      {label ? <TextAtom preset="body" title={label} /> : null}
      <TextInput
        {...rest}
        style={{
          ...defaultTexts.body,
          backgroundColor: Colors.gray,
          borderRadius: defaultDimensions.baseScale,
          paddingHorizontal: defaultDimensions.baseScale,
          paddingVertical: defaultDimensions.mediumScale,
        }}
      />
    </View>
  );
};
