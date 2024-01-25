import React from "react";

let Funpropsstates=(props)=>{

    return(
        <>
        <div className="card">
            <div className="card-body">
                <h2>PROPS&STATES USING FUNCTION</h2>
                <h2>WELCOME {props.peru}</h2>
                <h2>COURSE:{props.course}</h2>
                <pre>{JSON.stringify(props)}</pre>
            </div>
        </div>
        </>
    );
};

export default Funpropsstates;