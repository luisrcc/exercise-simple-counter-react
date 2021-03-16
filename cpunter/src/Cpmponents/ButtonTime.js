import React from 'react'

function ButtonTime (props) {
    return(
        <div>
            <button className='buttons' onClick={props.funcion}>
                {props.value}
            </button>
        </div>
    )
}

export default ButtonTime;