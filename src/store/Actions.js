import Axios from 'axios';
export const saveData = (data) => ({
    
    type: "SAVE_DATA",
    data: data
  });


  
export const fetchData = () => async dispatch => {
    try {
     
      let response = await Axios.get('https://disease.sh/v3/covid-19/countries');

    
      if (response.error) {
        
        // return dispatch(error(response || "ERROR"));
        console.log('something went wrng');
      } else {
        
        // console.log('result data', response.data);
        return dispatch(saveData(response.data));
      }
    } catch (error) {
      
    }
  };


