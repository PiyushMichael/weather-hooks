import React from 'react';

export const Summer = () => {
	return <div className="ui container" style={{backgroundColor: 'orange', height:'100vh'}}>
		<i class="ui sun massive icon" style={{position: 'fixed',top:'0%',left:'0%'}}></i>
		<h1>let's go to the beach...</h1>
		<i class="ui sun massive icon" style={{position: 'fixed',bottom:0,right:0}}></i>
	</div>
};

export const Winter = () => {
	return <div className="ui container" style={{backgroundColor: 'skyblue', height:'100vh'}}>
		<div className="ui active">	
			<i class="ui snowflake massive icon" style={{position: 'fixed',top:'0%',left:'0%'}}></i>
			<h1>brrrrr.... its cold</h1>
			<i class="ui snowflake massive icon" style={{position: 'fixed',bottom:0,right:0}}></i>
		</div>
	</div>
};

export const Loading = () => {
	return <div className="ui container" style={{backgroundColor: 'grey'}}>
		<div class="ui active dimmer">
			<div class="ui massive loader"></div>
		</div>
	</div>
};