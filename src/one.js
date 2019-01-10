import React from 'react';

class One extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    handleClick(){
        console.log('CLICKED')
    }

    render(){
        return(
            <div className = 'one'>
                <h1>PAGE ONE</h1>
                <div className = "box"></div>
                <button onClick = {() => this.handleClick()}></button>
            </div>
        )
    }
}

export default One;