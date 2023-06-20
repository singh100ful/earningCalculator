import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderAtom} from '../components/atoms/HeaderAtom';
import {Colors} from '../themes/Color';
import {defaultDimensions} from '../themes/metrics';
import {DropdownMolecule} from '../components/molecules/DropdownMolecule';
import {ButtonAtom} from '../components/atoms/ButtonAtom';
import {SliderInputMolecule} from '../components/molecules/SliderInputMolecule';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {RadioTagMolecule} from '../components/molecules/RadioTagMolecule';
import {useDispatch, useSelector} from 'react-redux';
import {calculateFund, fetchPool, getPool} from '../store/services/PoolService';
import {AppDispatch, RootState} from '../store/store';
import {ResultMolecule} from '../components/molecules/ResultMolecule';
import {frequency} from '../constants/AppConstants';
import {useDidUpdate} from '../utils/hooks/useDidUpdate';

interface HomeProps {}

const INITIAL_VALUES: CalcForm = {
  frqInDays: 7,
  years: 1,
  poolId: '',
  sipAmount: 500,
};

const yupValidation = Yup.object().shape({
  frqInDays: Yup.number().required('Select Frequency'),
  years: Yup.number().required('Number of years is required'),
  poolId: Yup.string().required('Select a fund'),
  sipAmount: Yup.number().required('Select a valid amount'),
});

export const Home: React.FC<HomeProps> = ({}) => {
  const {loading, pool, poolDetail} = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    dispatch(fetchPool());
  }, []);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: yupValidation,
    onSubmit: async (values: CalcForm) => {
      const days = values.years * 365;
      const investCount = Math.trunc(days / values.frqInDays);

      let data = {
        frqInDays: values.frqInDays,
        investmentCount: investCount,
        poolId: values.poolId,
        sipAmount: values.sipAmount,
      };
      dispatch(calculateFund(data));
    },
  });

  const {handleSubmit, values, setFieldValue} = formik;

  useDidUpdate(() => {
    dispatch(getPool(values.poolId));
  }, [values.poolId]);

  return (
    <View style={styles.mainContainer}>
      <HeaderAtom title="Calculate Earnings" />
      <View style={styles.contentContainer}>
        <SliderInputMolecule
          label="Invested amount"
          suffix="USDT"
          value={values.sipAmount}
          onValueChange={value => setFieldValue('sipAmount', value)}
          minimumValue={1}
          maximumValue={21000}
        />
        <DropdownMolecule
          title="Invested in"
          fieldName="poolId"
          handleValue={setFieldValue}
          value={values}
          options={pool}
        />
        <RadioTagMolecule
          options={frequency}
          label="Investment frequency"
          fieldName="frqInDays"
          value={values.frqInDays}
          handleValue={setFieldValue}
        />
        <SliderInputMolecule
          label="Invested from"
          suffix={values.years > 1 ? 'Years' : 'Year'}
          value={values.years}
          onValueChange={value => setFieldValue('years', value)}
          minimumValue={1}
          maximumValue={poolDetail?.yearlyOptions ?? 5}
        />
        <ResultMolecule />
      </View>
      <View style={{flex: 1}}>
        <ButtonAtom
          loading={loading.pool || loading.calculate || loading.poolDetail}
          disabled={
            !(formik.isValid && formik.dirty) ||
            loading.pool ||
            loading.calculate ||
            loading.poolDetail
          }
          title="Calculate"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: Colors.white},
  contentContainer: {flex: 4, padding: defaultDimensions.baseScale},
});
