export const initialState={
    user: null,
    playlist:[],
    playing:false,
    item:null,
    // token:'BQA0DsnoRNvGjz2Pijx-CXAJofxhar3Q4Fd_s2SOk1Jl3V9vilZS9SZJwYdsEzE5AMUfxQkuvBhCLrX5W5KrjCRJ8FtTMx1J5JlMvd3XDZndialmc2N8jhg9_UStL4oqlXXV9pNCalnzgVjuzHCGnWh721KCZsBzl0ZkXBxp3QDignw7e7BHzRUNIht1E_1SvzsLKVxIyTroY9K3',

};
const reducer =(state,action)=>{
    console.log(action);
    //Action->type,[payload] 
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
            default:
                return state;

    }
};
export default reducer;