import Axios from 'axios';
export const saveData = (data) => ({
    
    type: "SAVE_DATA",
    data: data
  });

export const saveAllData = (data) => ({
  type: 'SAVE_ALLDATA',
  data: data
});

const setLoader = (data) => ({
  type: 'SET_LOADER',
  data: data
});


  
export const fetchData = () => async dispatch => {
    try {
     
      await Axios.get('https://disease.sh/v3/covid-19/countries')
      
      .then((response) => {
        
         dispatch(saveData(response.data));
         return dispatch(setLoader(false));
      })
      .catch(error => {
        console.log('something went wrng');
        // return dispatch({ type: 'LOADER', data: true});
        return dispatch(setLoader(true));
      })
    
      // if (response.error) {
        
        
        // return dispatch(error(response || "ERROR"));

        
      // } else {
        
        // console.log('counting of countries ', response.data.length);
        // dispatch(saveAllData(response1.data))
        // return dispatch(saveData(response.data));
      // }
    } catch (error) {
      
    }
  };

export const fetchAllData = () => async dispatch => {
  await Axios.get('https://disease.sh/v3/covid-19/all')
    
  .then((response) => {
    return dispatch(saveAllData(response.data))
  })
  .catch((error) => {
    console.log('something went wrng');
    // return dispatch({ type: 'LOADER', data: true});
    return dispatch(setLoader(true));
  })
    
  // if (response.error) {
    
  //   // return dispatch(error(response || "ERROR"));
    
  // } else {
  //           dispatch(setLoader(true));
  //   // console.log('result data', response.data);
  //   return dispatch(saveAllData(response.data));
  // }
}

