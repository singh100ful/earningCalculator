import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {defaultDimensions} from '../../themes/metrics';
import {TextAtom} from '../atoms/TextAtom';
import {FormikErrors} from 'formik';
import {TagAtom} from '../atoms/TagAtom';

interface RadioTagMoleculeProps {
  options: {key: number; label: string}[];
  label: string;
  fieldName: string;
  value: number;
  handleValue(
    arg0: string,
    arg1: any,
  ): Promise<void> | Promise<FormikErrors<CalcParams>>;
}

export const RadioTagMolecule: React.FC<RadioTagMoleculeProps> = ({
  options,
  label,
  fieldName,
  value,
  handleValue,
}) => {
  return (
    <View style={styles.container}>
      <TextAtom title={label} />
      <View style={styles.contentContainer}>
        {options.map((data, index) => {
          const selected = value === data.key;
          return (
            <TagAtom
              key={index}
              onPress={() => handleValue(fieldName, data.key)}
              title={data.label}
              selected={selected}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: defaultDimensions.baseScale,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: defaultDimensions.smallScale,
  },
});
