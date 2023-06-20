import * as React from 'react';
import {View} from 'react-native';
import {Colors} from '../../themes/Color';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {defaultDimensions} from '../../themes/metrics';
import {formatCash} from '../../utils/format';
import {TextAtom} from '../atoms/TextAtom';

interface ResultMoleculeProps {}

export const ResultMolecule: React.FC<ResultMoleculeProps> = ({}) => {
  const {calculate} = useSelector((state: RootState) => state);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}>
        <TextAtom title="Invested money" />
        <TextAtom
          title={
            calculate?.resultData?.investedAmountInUSD
              ? formatCash(
                  parseInt(calculate?.resultData?.investedAmountInUSD),
                ) + ' USDT'
              : '0 USDT'
          }
          preset="title"
          style={{
            color: Colors.secondaryText,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}>
        <TextAtom title="Money you would have" />
        <View>
          <TextAtom
            title={
              calculate?.resultData?.worthNowInUSD
                ? formatCash(parseInt(calculate?.resultData?.worthNowInUSD)) +
                  ' USDT'
                : '0 USDT'
            }
            preset="title"
            style={{color: Colors.success}}
          />
          {calculate?.absoluteReturns ? (
            <View
              style={{
                backgroundColor:
                  parseFloat(calculate?.absoluteReturns) < 0
                    ? Colors.errorOpaciity
                    : Colors.successOpacity,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: defaultDimensions.smallScale,
                borderRadius: defaultDimensions.smallScale,
              }}>
              <TextAtom
                title={
                  parseFloat(calculate?.absoluteReturns).toFixed(2) + '%' ?? ''
                }
                preset="caption"
                style={{
                  color:
                    parseFloat(calculate?.absoluteReturns) < 0
                      ? Colors.error
                      : Colors.success,
                }}
              />
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};
