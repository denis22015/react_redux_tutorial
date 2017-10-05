
const initial_state =  '';




export default function filterTracks(state = initial_state,action){
	if (action.type === 'FIND_TRACK'){
		return action.payload;
	}
	return state;
}
