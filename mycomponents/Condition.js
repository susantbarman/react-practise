import React, {Component} from 'react';


// if else condition in react 

class Condition1 extends Component{

    constructor(){
        super()
        this.state ={
            login:false 
        }
    }


    render(){
    //     if (this.state.login==true) {

    //         return(<button className="btn btn-dark">Logout</button>)
            
    //     }
    //     else{
    //         return(<button className="btn btn-dark">LogIn</button>)
    //     }

    // }

    return(

        this.state.login?<h1>Logout</h1>:<h1>LogIn</h1>
    )
    }


 }
export default Condition1;
