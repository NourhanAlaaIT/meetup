import React, { Component } from 'react'

import MeetupCards from './MeetupCards';

export default class MeetupList extends Component {
    state = {
        meetups: [
            {
              title: "Meetup 1",
              location: "Cairo",
              topic: "React"
            },
            {
              title: "Meetup 2",
              location: "New York",
              topic: "Angular"
            }
        ]
    }

    render() {
        return (
            <div>

                { this.state.meetups && this.state.meetups.map((card) => {
                return (
                    <MeetupCards key={card.title} data={card} />
                )}) 
                }

            </div>
        )
    }
}
 