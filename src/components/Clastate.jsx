import React from "react";

class Clastate extends React.Component{
    constructor(props)
    {
        super(props)
        // this.state={employee:{name:'pradeep'}}
        this.state={employees:[{name:'lion',age:10},{name:'kite',age:30}]}

    }
    render()
    {
        return(
            <>
            <div className="card">
                <div className="card-body">
                    <span>NAME : {this.state.employees[1].name}</span><br/>
                    <span>AGE : {this.state.employees[1].age}yrs</span><br/>
                </div>
            </div> 
            <div className="card">
                <div className="card-body">
                    <span>NAME : {this.state.employees[0].name}</span><br/>
                    <span>AGE : {this.state.employees[0].age}yrs</span><br/> 
                </div>
            </div>
            </>

        );
    };
};

export default Clastate;