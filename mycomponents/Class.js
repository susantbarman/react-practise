import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Class extends React.Component{

    lothis() {
        alert("Click me for class");
    }


    render(){

        

        return(

            <div className="text-center">

                <h1 className="text-danger font-weight-light">I am {this.props.name} come form class</h1>
                <button className="btn btn-info " onClick={this.lothis}>Click Me for Class</button>
                

            </div>
            
        )
    }
}

export default Class;