import React, { Component } from 'react'

export default class MeetupCards extends Component {
    render() {
        return (
            <div>
                
                <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{ this.props.data.title }</h5>
                    <p className="card-text">{ this.props.data.location }</p>
                    <p className="card-text">{ this.props.data.topic }</p>
                    <a href="#" className="btn btn-primary">See more</a>
                </div>
                </div>

            </div>
        )
    }
}
