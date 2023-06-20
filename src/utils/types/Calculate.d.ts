interface CalcForm {
  frqInDays: number;
  years: number;
  poolId: string;
  sipAmount: number;
}
interface CalcParams {
  frqInDays: number;
  investmentCount: number;
  poolId: string;
  sipAmount: number;
}

interface CalculateResponse {
  resultData: Result;
  absoluteReturns: string;
}

interface Result {
  timeStamp: string;
  nav: string;
  totalShares: number;
  investedAmount: string;
  investedAmountInUSD: string;
  worthNowInUSD: string;
  investmentCount: number;
}
