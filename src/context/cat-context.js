import React from "react";
const [CREATE_CAT, EDIT_CAT, DELETE_CAT] = [
  "CREATE_CAT",
  "EDIT_CAT",
  "DELETE_CAT",
  "GET_CAT",
];

const INITIAL_STATE = [
  {
    id: 1,
    name: "Rick Sanchez",
    breed: "Siamese",
    age: 70,
    description: "I turned my self into cat Morty, I'm CAT Rick 😼!!!!",
    location: {
      lat: 9.8956782,
      lng: -84.0696677,
    },
  },
];

const CatContext = React.createContext([INITIAL_STATE, () => {}]);
CatContext.displayName = "CatContext";

const reducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_CAT:
      return state?.concat(action.value);
    case EDIT_CAT:
      return state?.map((cat) =>
        cat.id === parseInt(action.value.id) ? action.value : cat
      );
    case DELETE_CAT:
      return state?.filter((cat) => cat.id !== action.value);
    default:
      return state;
  }
};

function CatProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  const value = React.useMemo(() => [state, dispatch], [state, dispatch]);
  return <CatContext.Provider {...props} value={value} />;
}

function useCat() {
  return React.useContext(CatContext);
}

export { CatProvider, useCat, CREATE_CAT, EDIT_CAT, DELETE_CAT };
