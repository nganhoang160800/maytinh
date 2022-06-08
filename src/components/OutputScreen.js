import React from 'react';

const OutputScreen = (props) => {
    return (
        <div className="screen-row">
             <input type="text" readOnly value = {props.data}/>
            
        </div>
    )
}

export default OutputScreen;