
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import '../sass/style.scss'
// Javascript the good parts


const Prep = ({state}) => (
		/*
		let c1 = "green light off"
		let c2 = "yellow light off"
		let c3 = "red light off"
		switch (state){
			case (0):
				c3 = "red light ";
				break;
			case (1):
				c2 = "yellow light ";
				break;
			case (2):
				c1 = "green light ";
				break;
		}
	*/
		<div>
			<div class="traffic-light">
				<div class={ (state === 2 ? "green light": "green light off") }></div>
				<div class={ (state === 1 ? "yellow light": "yellow light off") }></div>
				<div class={ (state === 0 ? "red light": "red light off") }></div>
			</div>
			<button onClick={ () => store.dispatch( { type:'CHANGE_LIGHT'} ) }>change</button>
		</div>
);

//reducer
const trafficLight = (state = 2, action) => {
  switch(action.type){

  	case ('CHANGE_LIGHT'):

  		switch(state){
  			case (0):
  				return 2;
  			case (1):
  				return 0;
  			case (2):
  				return 1;
  			default :
  				return state;
  		}
  	default:
  		return state;
  }

}
const store = createStore(trafficLight);

const render = () => {
	ReactDOM.render(
		<Prep state = {store.getState()} />,
		document.getElementById("root")
	);
}
store.subscribe(render);
render();