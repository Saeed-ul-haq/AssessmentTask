const initialState = {
    arrayData: [],
    

};

const Reducers = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_DATA':
            

            const newArray = [...action.data];
            console.log('fetch');
            return {
                ...state,
                data: newArray
            };
       
    }
    return state;
    
}

export default Reducers;
