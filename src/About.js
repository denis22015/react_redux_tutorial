import React, { Component } from 'react';

// import './App.css';

// import RegistationForm from './RegistrationForm';

import {connect} from 'react-redux'


import {getTracks} from './actions/tracks.js'


class About extends Component {
	
	render() {
		console.log(this.props.tracks);
		return (
		  <div className="container">
		  	about
		  </div>
		);
	}
}

export default connect(
	state => ({
		tracks: state.tracks.filter(track=>track.name.includes(state.filterTracks) )
	}),
	dispatch => ({
		onAddTrack: (trackName) => {
			const payload = {
				id: Date.now().toString(),
				name: trackName
			}
			dispatch({type: 'ADD_TRACK', payload});
		},
		onFindTrack: (name)=>{
			console.log('name',name);
			dispatch({type:'FIND_TRACK',payload:name});
		},
		onGetTrack: ()=>{
			//
			dispatch(getTracks());
		}
	})
)(About);
