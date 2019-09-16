import React, {Component} from "react";

export default class Cell extends Component {
    constructor(props){
        super(props)
        this.state = {
            background: this.props.background
        }
    }

    colorChange = () => {
        this.setState(function(state){
            return state.background === "white"
            ? { background: this.props.color }
            : { background: "white" }
        });
    }

    paint = () => {
        this.setState(function (){
            return {background: this.props.color}
        })
    }

    erase = () => {
        this.setState(function (){
            return {background: this.state.background}
        })
    }

    componentDidUpdate() {
        
    }

    render() {
        return(
            <div className="cell" 
            onClick={()=> {this.colorChange()}}
            onmouseleave={() => {
                if(this.props.isMouseDown) {
                    this.paint();
                }
            }}
            >
            </div>
        )
    }
}