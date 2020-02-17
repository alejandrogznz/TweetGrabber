import React from 'react'
// This class represents a simple tweet component
// Will be part of a larger tweet feed structure
class TweetComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.username}</h1>
                <p>{this.props.statustext}</p>
            </div>
        );
    }
}

export default TweetComp;