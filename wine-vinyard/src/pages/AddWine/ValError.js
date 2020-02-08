import React from 'react'

export default function ValErr(props){
    if(props.message) {
        return(
            <div className="errorMessage">{props.message}</div>
        )
    }
    return <></>
}