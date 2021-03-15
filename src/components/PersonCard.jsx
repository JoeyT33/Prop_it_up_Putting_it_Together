import React, {Component} from 'react';


class Person extends Component{
    constructor(props) {
        super(props);
        this.state = {
            allStarCount: this.props.allStar
        };
    }

    render(){

        const addAllStarBid = () =>{
            this.setState({allStarCount: this.state.allStarCount+1})
            console.log(this.state.allStarCount)
        }
        const { lname, fname, college, allstar } = this.props;


        return <div className="personInfo">
            <h1>{this.props.lname}, {this.props.fname}</h1>
            <p>College: {this.props.college}</p>
            <p>All Star Apperances: {this.state.allStarCount}</p>
            <button onClick={addAllStarBid}>Add All Star Nod</button>
        </div>
    }
}




export default Person;