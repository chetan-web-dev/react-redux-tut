import React from "react";
const User = (props) =>{
    console.log(props.data.name)
    const { data } = props;
    return(
        <>
            <p>Am in user component</p>
            <h1>{data.name}</h1>
            <p>{data.age}</p>
        </>        
    )
}

export default User;