import * as React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import {defaultDimensions} from '../../themes/metrics';
import {TextAtom} from './TextAtom';
import {Colors} from '../../themes/Color';

interface ButtonAtomProps extends PressableProps {
  title: string;
  loading?: boolean;
}

export const ButtonAtom: React.FC<ButtonAtomProps> = ({
  title,
  loading,
  ...rest
}) => {
  return (
    <Pressable
      {...rest}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: rest.disabled
            ? Colors.secondaryText
            : Colors.primaryCTA,
        },
        styles.buttonContainer,
      ]}>
      {loading ? (
        <ActivityIndicator color={Colors.white} size="small" />
      ) : (
        <TextAtom
          title={title}
          preset="bodyBold"
          style={{color: Colors.white}}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    borderRadius: defaultDimensions.mediumScale,
    padding: defaultDimensions.baseScale,
    margin: defaultDimensions.baseScale,
  },
});
