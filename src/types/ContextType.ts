export interface TuserContext {
  yellow: boolean;
  setYellow: React.Dispatch<React.SetStateAction<boolean>>;
  list: object;
  setList: React.Dispatch<React.SetStateAction<object>>;
  burgerShow: boolean;
  setBurgerShow: React.Dispatch<React.SetStateAction<boolean>>;
  cartShow: boolean;
  setCartShow: React.Dispatch<React.SetStateAction<boolean>>;
  showList: boolean;
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
}
