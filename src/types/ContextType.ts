export interface TuserContext {
  yellow: boolean;
  setYellow: React.Dispatch<React.SetStateAction<boolean>>;
  list: object;
  setList: React.Dispatch<React.SetStateAction<object>>;
}
