

const Reducers =  (state = { countryWiseData: [],}, action ) => {
    switch (action.type) {

      case "SAVE_DATA":
          
        return {
          ...state,
         countryWiseData: action.data
        };
      
      
      default:
        return state;
    }
  };
export default Reducers;
