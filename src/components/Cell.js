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
            return state.background === "blue"
            ? { background: this.props.color }
            : { background: "blue" }
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
        console.log("hit")
        return(
            <div className="cell" 
            onClick={()=> {this.colorChange()}}
            onMouseLeave={() => {
                if(this.props.isMouseDown) {
                    this.paint();
                }
            }}
            onMouseEnter={() => {
                if(this.props.isMouseDown){
                    this.paint();
                }
            }}
            >
            </div>
        )
    }
}