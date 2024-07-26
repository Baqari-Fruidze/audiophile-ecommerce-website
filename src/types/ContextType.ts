export interface TuserContext {
  yellow: boolean;
  setYellow: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
