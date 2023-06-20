import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../themes/Color';
import {moderateScale, defaultDimensions} from '../../themes/metrics';
import {TextAtom} from './TextAtom';

interface HeaderAtomProps {
  title: string;
}

export const HeaderAtom: React.FC<HeaderAtomProps> = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <TextAtom title={title} preset="title" style={{color: Colors.white}} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.primaryCTA,
    height: moderateScale(60),
    paddingHorizontal: defaultDimensions.baseScale,
    paddingVertical: defaultDimensions.smallScale,
    justifyContent: 'center',
  },
});
