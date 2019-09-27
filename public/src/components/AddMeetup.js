import React, { Component } from 'react'

export default class AddMeetup extends Component {
    state = {
        title: "",
        location: "",
        topic: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.title === "" || this.state.location === "" || this.state.topic === ""){
            return;
        } else { console.log(this.state); 
            }
    }


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Meetup title</label>
                    <input type="text" className="form-control" id="meetupTitle" aria-describedby="emailHelp" placeholder="Enter title" name="title" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Meetup location</label>
                    <input type="text" className="form-control" id="meetupLocation" placeholder="location" name="location" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Meetup topic</label>
                    <input type="text" className="form-control" id="meetupTopic" placeholder="topic" name="topic" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary submitBtn">Submit</button>
                </form>

                <div className="breview"> 
                    <p> Name: {this.state.title} </p>
                    <p> Location: {this.state.location}</p>
                    <p> Topic: {this.state.topic}</p>
                </div>

            </div>
        )
    }
}
