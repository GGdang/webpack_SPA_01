
export const getters = {
    filteredList : (state) => {
        return state.list.filter(item => item<20);
    },
   listCount :(state,getters) =>{
       return getters.filteredList.length;
    },
};