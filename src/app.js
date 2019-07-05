import React,{createHook} from 'react';
import ReactDOM from 'react-dom';
import {Summer,Winter,Loading} from './components';

class App extends React.Component {
	//const [lat,setLat] = createHook(100);
	state = {lat: 100,err: 'eh',month: -1};
	
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			pos => this.setState({lat: pos.coords.latitude}),
			error => this.setState({err: error.message})
		);
		this.setState({month: new Date().getMonth()});
	}
	
	render(){
		if (this.state.lat === 100) return <Loading />
		else {
			if (this.state.month>2 && this.state.month<9){
				if (this.state.lat>0) return <Summer />
				else return <Winter />
			}
			else {
				if (this.state.lat>0) return <Winter />
				else return <Summer />
			}
		}
	}
}

export default App;