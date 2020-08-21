

const Reducers =  (
    state = {
        countryWiseData: [],
        AllData: []
    },
    action
  ) => {
    switch (action.type) {

      case "SAVE_DATA":
          
        return {
          ...state,
         countryWiseData: action.data
        };
      case "SAVE_ALL_DATA":

      return {
          ...state,
          AllData: action.data
      }
      
      default:
        return state;
    }
  };
export default Reducers;
