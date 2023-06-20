import * as React from 'react';
import {Image, Modal, Pressable, StyleSheet, View} from 'react-native';
import {Colors} from '../../themes/Color';
import {defaultDimensions} from '../../themes/metrics';
import {SeparatorAtom} from '../atoms/SeparatorAtom';
import {TextAtom} from '../atoms/TextAtom';
import {data} from '../../utils/data';
import {FormikErrors} from 'formik';

interface DropdownMoleculeProps {
  title: string;
  fieldName: string;
  handleValue(
    arg0: string,
    arg1: any,
  ): Promise<void> | Promise<FormikErrors<CalcParams>>;
  value: any;
  options: PoolType[];
}

export const DropdownMolecule: React.FC<DropdownMoleculeProps> = ({
  title,
  fieldName,
  handleValue,
  value,
  options,
}) => {
  const [modal, setModal] = React.useState(false);
  const values = value[fieldName];
  return (
    <View style={styles.mainContainer}>
      <Modal visible={modal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Pressable
            style={{flex: 2, backgroundColor: Colors.transparent}}
            onPress={() => setModal(!modal)}
          />
          <View style={styles.heading}>
            <TextAtom title={title} preset="title" style={styles.textStyle} />
            <SeparatorAtom />
            {options?.map((pool, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    handleValue(fieldName, pool.id);
                    setModal(!modal);
                  }}
                  style={styles.contentContainer}>
                  <Image
                    source={{uri: pool.poolImage}}
                    style={{width: 25, height: 25}}
                  />
                  <TextAtom title={pool.poolName} style={styles.textStyle} />
                </Pressable>
              );
            })}
          </View>
        </View>
      </Modal>
      <View>
        <TextAtom title={title} style={styles.labelStyle} />
        <Pressable onPress={() => setModal(!modal)} style={styles.inputStyle}>
          <TextAtom
            title={
              data.pools.find(f => f.id === values)?.poolName ??
              'Select a fund to start'
            }
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {paddingVertical: defaultDimensions.mediumScale},
  labelStyle: {
    paddingVertical: defaultDimensions.smallScale,
  },
  inputStyle: {
    backgroundColor: Colors.gray,
    borderRadius: defaultDimensions.baseScale,
    paddingHorizontal: defaultDimensions.baseScale,
    paddingVertical: defaultDimensions.mediumScale,
  },
  modalContainer: {flex: 1, backgroundColor: Colors.primaryTextOpacity},
  heading: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: defaultDimensions.baseScale,
    borderTopRightRadius: defaultDimensions.baseScale,
    paddingVertical: defaultDimensions.baseScale,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: defaultDimensions.baseScale,
    paddingVertical: defaultDimensions.mediumScale,
  },
  textStyle: {
    paddingHorizontal: defaultDimensions.baseScale,
  },
});
