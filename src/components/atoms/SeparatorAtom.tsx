import * as React from 'react';
import {View} from 'react-native';
import {Colors} from '../../themes/Color';
import {defaultDimensions} from '../../themes/metrics';

interface SeparatorAtomProps {}

export const SeparatorAtom: React.FC<SeparatorAtomProps> = ({}) => {
  return (
    <View style={{paddingVertical: defaultDimensions.mediumScale}}>
      <View
        style={{
          backgroundColor: Colors.border,
          height: 1,
        }}
      />
    </View>
  );
};
