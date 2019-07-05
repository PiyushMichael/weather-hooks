import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Summer,Winter,Loading} from './components';

const App = () => {
	const [lat,setLat] = useState(100);
	const [err,setErr] = useState('');
	const [month,setMonth] = useState(-1);
	
	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			pos => setLat(pos.coords.latitude),
			error => setErr(error.message)
		);
		setMonth(new Date().getMonth());
	},[]);
	
	if (lat === 100) return <Loading />
	else {
		if (month>2 && month<9){
			if (lat>0) return <Summer />
			else return <Winter />
		}
		else {
			if (this.lat>0) return <Winter />
			else return <Summer />
		}
	}	
};

export default App;