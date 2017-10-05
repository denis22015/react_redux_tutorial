import React, { Component } from 'react';

// import './App.css';

// import RegistationForm from './RegistrationForm';

import {connect} from 'react-redux';

import {Link} from 'react-router';

import {getTracks} from './actions/tracks.js'


class App extends Component {

	addTrack(){
		console.log('addTrack',this.trackInput.value);
		this.props.onAddTrack(this.trackInput.value);
		this.trackInput.value='';
	}
	findTrack(){

		this.props.onFindTrack(this.searchInput.value);
		this.searchInput.value='';
	}
	render() {
		console.log(this.props.ownProps);
		return (
		  <div className="container">
		  	<div>
			    <input type="text" ref={(input)=>{this.trackInput = input}} />
			    <button onClick={this.addTrack.bind(this)}>Add Track</button>
		    </div>
		  	<div>
			    <input type="text" ref={(input)=>{this.searchInput = input}} />
			    <button onClick={this.findTrack.bind(this)}>Find Track</button>
		    </div>
		    <div>
		    	<button onClick={this.props.onGetTrack} >Get tracks</button>
		    </div>
		    <ul>
			    {this.props.tracks.map((track,index)=>
			    	<li key={index}>
			    		<Link to={`/tracks/${track.id}`} >{track.name}</Link>
			    	</li>
			    )}
		    </ul>
		  </div>
		);
	}
}

export default connect(
	(state,ownProps ) => ({
		tracks: state.tracks.filter(track=>track.name.includes(state.filterTracks) ),
		ownProps
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
)(App);
