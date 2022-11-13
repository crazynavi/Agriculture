import { 
    GET_CURRENT_WEATHER_BY_LOCATION 
} from "../actions/types";


const initialState = {
    weathers: []
}

const weatherReducer = (state = initialState, action) => {
    const { type, payload} = action;

    switch(type){
        case GET_CURRENT_WEATHER_BY_LOCATION: {
            return {...state, name: payload};
        }
        default: 
            return state;
    }
};

export default weatherReducer;