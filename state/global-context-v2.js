import {
  useCallback,
  useContext,
  useMemo,
  useReducer,
  createContext,
} from "react";

const GlobalContext = createContext();

//actions
export const TOGGLE_CARD = "TOGGLE_CARD";
export const ADD_TO_CARD = "ADD_TO_CARD";
export const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const TOGGLE_WISHLIST = "TOGGLE_WISHLIST";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const initialData = {
  isCardOpen: false,
  card: [],
  isWishlistOpen: false,
  wishlist: [],
};

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CARD: {
      return {
        ...state,
        isCardOpen: action?.payload,
      };
    }
    case ADD_TO_CARD: {
      const isItemInCard = state?.card?.find(
        (item) => item.id === action?.payload?.id
      );
      return {
        ...state,
        card: !isItemInCard
          ? [...state?.card, { ...action?.payload, quantity: 1 }]
          : state?.card?.map((item) => {
              if (item?.id === action?.payload?.id) {
                return { ...item, quantity: item?.quantity + 1 };
              }
              return item;
            }),
      };
    }
    case INCREASE_QUANTITY: {
      return {
        ...state,
        card: state?.card?.map((item) => {
          if (item?.id === action?.payload) {
            return { ...item, quantity: item?.quantity + 1 };
          }
          return item;
        }),
      };
    }
    case DECREASE_QUANTITY: {
      return {
        ...state,
        card: state?.card?.map((item) => {
          if (item?.id === action?.payload) {
            return { ...item, quantity: item?.quantity - 1 };
          }
          return item;
        }),
      };
    }
    case REMOVE_FROM_CARD: {
      return {
        ...state,
        card: state?.card?.filter((item) => item?.id !== action?.payload),
      };
    }
    case TOGGLE_WISHLIST: {
      return {
        ...state,
        isWishlistOpen: action?.payload,
      };
    }
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlist: [...state?.wishlist, action?.payload],
      };
    }
    case REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishlist: state?.wishlist?.filter(
          (item) => item?.id !== action?.payload
        ),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialData);
  const dispatchAction = useCallback(
    (...args) => dispatch(...args),
    [dispatch]
  );
  const infos = useMemo(() => state, [state]);
  return (
    <GlobalContext.Provider
      value={{ infos, dispatch: dispatchAction }}
      {...props}
    />
  );
};
const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export { GlobalProvider, useGlobalContext };
