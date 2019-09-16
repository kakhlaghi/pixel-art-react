import React, {Component} from "react";
import Cell from "./Cell"

export default class Canvas extends Component {
    constructor(props){
        super(props)
        this.state={
            width: 10,
            height: 10,
            color: "black",
            clear: false,
            isMouseDown: false 
        }
    }

    componentDidMount(){
       const grid = () =>{ 
           let arr = [];
            for(let x = 0; x <= this.state.height; x++){
                arr = [...arr, <Cell isMouseDown={this.state.isMouseDown} />]
            }
        }
    }


    render(){

        return (
            <div>
            </div>
        )
    }
}