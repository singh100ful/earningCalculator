import * as React from 'react';
import {Text, TextProps, TextStyle, View} from 'react-native';
import {defaultTexts} from '../../themes/Fonts';

interface TextAtomProps extends TextProps {
  title: string;
  style?: TextStyle;
  preset?: TextPresets;
}

export const TextAtom: React.FC<TextAtomProps> = ({
  title,
  style,
  preset = 'body',
  ...rest
}) => {
  const textStyle = [Presets[preset], style];
  return (
    <View>
      <Text {...rest} style={[textStyle]}>
        {title}
      </Text>
    </View>
  );
};

const Presets = {
  title: {...defaultTexts.largeTitle} as TextStyle,
  bodyBold: {...defaultTexts.bodyBold} as TextStyle,
  body: {...defaultTexts.body} as TextStyle,
  bodySubtitle: {...defaultTexts.bodySubtitle} as TextStyle,
  caption: {...defaultTexts.caption} as TextStyle,
};

export type TextPresets = keyof typeof Presets;
