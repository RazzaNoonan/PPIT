import React from "react";
import {AlcoholItem} from './alcoholItem';

export class Alcohols extends React.Component{
    render(){
        return this.props.alcohols.map(
            (alcohol)=>{
                return <AlcoholItem alcohol={alcohol} key={alcohol._id} Reload={this.props.Reload}></AlcoholItem>
            }
        );
    }
}