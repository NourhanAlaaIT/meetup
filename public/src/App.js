import React, { Component } from 'react'

import Navbar from './components/Navbar';
import MeetupList from './components/MeetupList';
import AddMeetup from './components/AddMeetup';
import './style.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MeetupList />
                <AddMeetup />
            </div>
        )
    }
}
