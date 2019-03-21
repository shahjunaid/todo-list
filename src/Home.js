import React,{Component} from 'react';
import './act.css';
class Home extends Component{

	//constructor
	constructor(props){
		super(props)
		this.state={
			description1:"",
			temp1:0,
			icon1:"",
			weathericon:"",
			list:[],
			list2:[],
			list3:"",
			city:"srinagar"
		}

	}


	//functions
	gettingData=(cityName)=>{
		let apikey =`https://api.openweathermap.org/data/2.5/
			weather?q=${cityName}&appid=dc5772814e824e4e30c7fd484636612d`;
	 		fetch(apikey)
	 		.then(response =>response.json())
	 		.then(users =>{
	 			this.setState({list:users});
	 			this.setState(newState=>({
	 			icon1:newState.list.main,
	 			list3:newState.list.weather[0].icon
	 			}))
	 			this.setState(newState=>({temp1:newState.icon1.temp-273.15}))
	 			})
	 		}
	 	componentDidMount(){
	 		
	 		let apikey =`https://api.openweathermap.org/data/2.5/
			weather?q=${this.state.city}&appid=dc5772814e824e4e30c7fd484636612d`;
	 		fetch(apikey)
	 		.then(response =>response.json())
	 		.then(users =>{
	 			this.setState({list:users});
	 			this.setState(newState=>({
	 			icon1:newState.list.main,
	 			list3:newState.list.weather[0].icon
	 			}))
	 			this.setState(newState=>({temp1:newState.icon1.temp-273.15}))
	 			})

	 		}
	 		getResult=(event)=>{
	 			
	 			this.setState({city:event.target.value});
	 		    this.gettingData(event.target.value);
	 		   
	 		}

//render
	render(){
		console.log("render");
		return(<div className="main">
			<h1>Temperature in {this.state.city} is {parseInt(this.state.temp1)}°C</h1>
			<img src={`http://openweathermap.org/img/w/${this.state.list3}.png`} alt="weather icon"/>
			<br/>
			<select onChange={this.getResult}>
			<option value="srinagar">Srinagar</option>
			<option value="jammu">jammu</option>
			<option value="delhi">delhi</option>
			<option value="goa">goa</option>
			<option value="kerala">kerala</option>
			</select>
			</div>
			)
	}
}
export default Home;