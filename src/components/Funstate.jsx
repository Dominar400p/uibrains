import React,{useState} from "react";

let Funstate = () =>{

    // let [state,setState] = useState({
        
    //     name:'POP',
        
    //     branch:'MECHANICAL'
    // });
    let[state,setState]=useState({
        students:[{name:'BIKES',price:'3.6L'},{name:'CARS',price:'9L'}]
    })

    return(
        <>
        <div className="card">
            <div className="card-body">''''
                {/* <span>NAME : {state.name}</span><br/>
                <span>BRANCH : {state.branch}</span> */}
                <span>NAME : {state.students[0].name}</span><br/>
                <span>PRICE : {state.students[0].price}</span>

            </div>
        </div>
        <div className="card">
            <div className="card-body">
                {/* <span>NAME : {state.name}</span><br/>
                <span>BRANCH : {state.branch}</span> */}
                <span>NAME : {state.students[1].name}</span><br/>
                <span>PRICE : {state.students[1].price}</span>

            </div>
        </div>
        </>
    );
};

export default Funstate;