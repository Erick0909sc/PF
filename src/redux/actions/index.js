import axios from 'axios';

export const GET_FOODS = 'GET_FOODS';
export const GET_FOOD_BY_NAME = 'GET_FOOD_BY_NAME';
export const GET_FOOD_BY_ID = 'GET_FOOD_BY_ID';


export const getFoods = () => {
    return async (dispatch) => {
        const response = (await axios.get('http://localhost:3000/api/InsertData/AllFoods')).data;
        return dispatch({
            type: 'GET_FOODS',
            payload: response,
        });
    };
};

// Este seria para el input de search
export const getFoodByName = (name) => {
    return async (dispatch) => {
        const response = (await axios.get(`http://localhost:3000/api/InsertData/Name?name=${name}`)).data;
        return dispatch({
            type: 'GET_FOOD_BY_NAME',
            payload: response,
        });
    };
}

// Este seria para el detail food
export const getFoodById = (id) => {
    return async (dispatch) => {
        const response = (await axios.get(`http://localhost:3000/api/InsertData/${id}`)).data;
        return dispatch({
            type: 'GET_FOOD_BY_ID',
            payload: response,
        });
    };
}

