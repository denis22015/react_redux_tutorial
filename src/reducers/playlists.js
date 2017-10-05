
const initial_state =  [
	'Home playlist',
	'Sandman plylist']




export default function playlist(state = initial_state,action){
	if (action.type === 'ADD_PLAYLIST'){
		return [
			...state,
			action.payload
		]
	} else if (action.type === 'DELETE_PLAYLIST'){
		return state;
	} 
	return state;
}
