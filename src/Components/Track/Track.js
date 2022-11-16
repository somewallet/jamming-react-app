import React from "react";
import './Track.css';

export class Track extends React.Component {
    
    renderAction() {

        let buttonText;

        if (this.props.isRemoval) {
            buttonText = '-';
        } else {
            buttonText = '+';
        };

        return (
            <button className="Track-action">
                {buttonText};
            </button>
        );
    }
    
    render() {
        return (
            <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
            {this.renderAction()}
            </div>
        );
    }
}