import React from 'react';

const validation = (props) => {
    let validationMessage = "Text's length is sufficient!";

    if(props.inputLength <= 10) {
        validationMessage = 'Text not long enough, must be more than 10 characters';
    }

    return (
        <div>
            <p>{validationMessage}</p>

            {
                // props.inputLength > 5 ?     
                //     <p>Text long enough!</p> :
                //     <p>Text too short!</p>
            }
        </div>
    );
}

export default validation;