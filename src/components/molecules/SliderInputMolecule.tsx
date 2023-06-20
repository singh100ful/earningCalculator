import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextAtom} from '../atoms/TextAtom';
import {TextInputAtom} from '../atoms/TextInputAtom';
import {defaultDimensions} from '../../themes/metrics';
import Slider, {SliderProps} from '@react-native-community/slider';
import {Colors} from '../../themes/Color';

interface SliderInputMoleculeProps extends SliderProps {
  label: string;
  suffix?: string;
}

export const SliderInputMolecule: React.FC<SliderInputMoleculeProps> = ({
  label,
  suffix,
  ...rest
}) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <TextAtom title={label} />
        <View style={styles.labelContainer}>
          <TextInputAtom editable={false} value={rest.value?.toString()} />
          {suffix ? <TextAtom title={suffix} style={styles.textStyle} /> : null}
        </View>
      </View>
      <View>
        <Slider
          {...rest}
          style={styles.sliderStyle}
          step={1}
          minimumTrackTintColor={Colors.primaryCTA}
          maximumTrackTintColor={Colors.primaryTextOpacity}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderStyle: {width: defaultDimensions.screenWidth - 40, height: 40},
  textStyle: {paddingHorizontal: defaultDimensions.smallScale},
});
