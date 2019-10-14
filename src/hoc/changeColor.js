import React from 'react';


// High order component that changes the color of the todos on refresh.
const changeColor = (ColorChange) => {

    const colors = ['red', 'blue', 'pink', 'green', 'brown', 'black'];
    const randomColors = colors[Math.floor(Math.random() * 5)];
    const classPick = randomColors + '-text';

    return (props) => {

        return (
            <div className={classPick}>
                <ColorChange {...props} />
            </div>
        )

    }
}

export default changeColor;