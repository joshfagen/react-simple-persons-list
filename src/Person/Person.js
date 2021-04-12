import React from 'react';
// import styled from 'styled-components';
import styles from './Person.css';
// import Radium, { StyleRoot } from 'radium';
// import './Person.css';

// const StyledDiv =   styled.div`
            
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;


//     @media (max-width: 500px) {
//         width: 450px;
//     } 
// `;

const person = (props) => {
    // const style = {
    //     '@media(max-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
      
        // <div className="Person" style={style}>
        // <StyledDiv>
        <div className={styles.Person}>
             <p onClick={props.click}>I'm  {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" style={{textAlign:"center"}} onChange={props.change} value={props.name}/>
        </div>
           
        // </StyledDiv>
    ) 
}

// export default Radium(person);
export default person