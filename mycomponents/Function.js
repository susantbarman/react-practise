import React from 'react';

import 'tachyons';

function Welcome(props){

    function Dothis(a){
        alert(a);
    }

    return(

        <div className="tc">

            <h1 > I am {props.name} come from Function</h1>
            <button onClick={Dothis.bind(this,'hello someone click me function')}>Click Me</button>

        </div>

        
    )
}

export default Welcome;