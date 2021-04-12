import React from 'react';


const userInput = (props) => {

    const style = {
        marginTop: '10px',
        border: '2px solid red'
    };
    return(
        <div>
            <label>UserName:</label>
            <input 
                style={style}
                type="text" 
                onChange={props.change} 
                value={props.name}
            /> 
        </div>
    )
}

export default userInput;