import React from 'react'
import Numbers from './Numbers'
import ButtonTime from './ButtonTime'



function Main(props) {
    return (
        <div className="class-container">
            <Numbers name={props.reloj} />
            <Numbers name={props.h1} />
            <Numbers name={props.h2} />
            <Numbers name={props.m1}/>
            <Numbers name={props.m2} />
            <Numbers name={props.s1} />
            <Numbers name={props.s2} />
            <div className='box-buttons'>
                <ButtonTime value='Start' funcion={props.Start}/>
                <ButtonTime value='Stop' funcion={props.Stop}/>
                <ButtonTime value='Reset' funcion={props.Reset}/>
            </div>
        </div>
    )
}

export default Main;