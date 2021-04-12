import React from 'react';
import './UserOutput.css'


const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi in nulla posuere. 
                Eu lobortis elementum nibh tellus molestie nunc non. Nisl vel pretium lectus quam id leo in vitae turpis. Mauris pharetra et ultrices neque ornare aenean euismod. 
                Urna duis convallis convallis tellus id. Curabitur vitae nunc sed velit. Adipiscing bibendum est ultricies integer. 
                Aliquet risus feugiat in ante metus dictum at tempor. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Feugiat nisl pretium fusce id velit. 
                Amet cursus sit amet dictum sit. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Facilisis gravida neque convallis a cras. 
                In eu mi bibendum neque egestas. Commodo odio aenean sed adipiscing. Lacus viverra vitae congue eu consequat ac felis donec et. 
                Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Nulla posuere sollicitudin aliquam ultrices sagittis orci.
            </p>
            <p>
                Volutpat est velit egestas dui id ornare. Dolor sit amet consectetur adipiscing elit duis. Mattis pellentesque id nibh tortor id aliquet lectus. 
                Consectetur adipiscing elit ut aliquam purus sit amet. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Leo a diam sollicitudin tempor. 
                Interdum posuere lorem ipsum dolor sit amet. Dolor magna eget est lorem. Facilisi etiam dignissim diam quis enim lobortis scelerisque. 
                Tristique senectus et netus et malesuada fames ac turpis egestas. Dolor morbi non arcu risus quis varius quam quisque. Cursus mattis molestie a iaculis. 
                Et tortor consequat id porta nibh venenatis cras sed felis. Et malesuada fames ac turpis egestas sed tempus urna.
            </p>
            <h1>- {props.userName}</h1>
            <hr/>
        </div>
    )
}

export default userOutput;