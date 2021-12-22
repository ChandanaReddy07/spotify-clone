export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:null
}

const reducer =(state,action)=>{
console.log(action);

// action -> type and [payload]

switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        }
    case 'SET_PLAYLIST':
        return {
            ...state,
            playlists:action.playlists
        }
        default: 
        return state;
}
}

export default reducer;
