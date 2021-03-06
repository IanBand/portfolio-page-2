// REACT //
import React, { Component } from 'react';

// COMPONENTS //
import {NavLink} from 'react-router-dom';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <div>
                <div className="scene" style={{zIndex: -1}}>
                    <div className="cube">
                        <div className="cube__face cube__face--front"></div>
                        <div className="cube__face cube__face--back"></div>
                        <div className="cube__face cube__face--right"></div>
                        <div className="cube__face cube__face--left"></div>
                        <div className="cube__face cube__face--top"></div>
                        <div className="cube__face cube__face--bottom"></div>
                    </div>
                </div>

                {/*Second cube for outline */}
                <div className="scene">
                    <div className="cube outline">
                        <div className="cube__face cube__face--front"></div>
                        <div className="cube__face cube__face--back"></div>
                        <div className="cube__face cube__face--right"></div>
                        <div className="cube__face cube__face--left"></div>
                        <div className="cube__face cube__face--top"></div>
                        <div className="cube__face cube__face--bottom"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;