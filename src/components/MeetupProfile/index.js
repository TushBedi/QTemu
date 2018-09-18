import React, { Component } from 'react';
import './style.css'
import './grey-square.jpg'


class MeetupProfile extends Component {

    constructor ( ) {
        super ()

        this.state = {
            date: new Date()
        }
    }

    render () {
        return (
            <div className="grey-section">
                <div className="profile"> 
                    <div className="image"> 
                        <img src="https://balancehealthclubs.co.uk/wp-content/uploads/grey-square.png" className="image" alt="Profile Photo"></img>
                    </div>
                    <div className="profile-contents">
                        <h2> Hacktiv8 Meetup </h2>
                        <table>
                            <tr>
                                <td>Location</td>
                                <td>Jakarta, Indonesia</td> 
                            </tr>
                            <tr>
                                <td>Members</td>
                                <td>1,078</td> 
                            </tr>
                            <tr>
                                <td>Organizers</td>
                                <td>Adhy Wiranata</td> 
                            </tr>
                        </table>


                    </div>
                </div>
            </div>
        );

    }
}

export default MeetupProfile;
