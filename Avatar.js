import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  './Avatar.css';
import 'tachyons';



const Avatar =(props) =>{

	return(

		<div className="Avatar_style ma4 bg-light-green dib pa4">
			<img src="https://joeschmoe.io/api/v1/nature" alt="Avatar" className=''></img>

			<h1 >{props.name}</h1>
			<p> {props.work}</p>
		</div>


			);



}



export default Avatar;