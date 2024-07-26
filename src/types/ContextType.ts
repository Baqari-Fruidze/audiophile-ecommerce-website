import { Tlist } from "./List";

export interface TuserContext {
  yellow: boolean;
  setYellow: React.Dispatch<React.SetStateAction<boolean>>;
  setList: React.Dispatch<React.SetStateAction<Tlist[]>>;
  list: Tlist[];
}
