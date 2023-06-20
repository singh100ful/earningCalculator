interface PoolState {
  loading: {
    pool: boolean;
    poolDetail: boolean;
    calculate: boolean;
  };
  error: {
    poolErr: {} | null;
    poolDetailErr: {} | null;
    calculateErr: {} | null;
  };
  pool: PoolType[];
  poolDetail: PoolDetail | null;
  calculate: CalculateResponse | null;
}

interface PoolType {
  id: number;
  poolName: string;
  poolImage: string;
  shortDescription: string;
  longDescription: string;
  rebalanceInterval: number;
  volatilityBand: number;
  minimumInvestment: string;
  minimumSipInvestment: string;
  baseNav: string;
  nav: string;
  tvl: string;
  apr: number;
  totalNumberOfShares: number;
  underlyingAssetId: number;
  activeFund: false;
  cagr: [
    {
      cagrValue: number;
      numberOfYears: number;
      isDefault: true;
    },
  ];
  underlyingAsset: {
    symbol: string;
  };
  percentChange: string;
}

interface PoolDetail {
  weeklyOptions: number;
  monthlyOptions: number;
  yearlyOptions: number;
}
