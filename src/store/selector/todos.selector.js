import { selector } from 'recoil';
import { GET_TODOS } from '../../constants/api'

export const fetchGetTodos = selector({
    key: 'fetchGetTodos',
    get: async ({ get }) => {
        try{
            const response = await fetch(GET_TODOS);
            const data = await response.json();
            return data;
        }catch(error){
            console.log("error todos selector")
            throw error;
        }
    }
});