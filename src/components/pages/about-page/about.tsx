import React, { Component } from 'react';
import './about.css';

import DiscordBox from '../../discord-box';
import TeamService from '../../../services/team-service';

interface TeamProps {
    members: object[]
}

const About: React.FC <TeamProps> = () => {

    const team = new TeamService();
    const data = team.getData();

    return (
        <div className="about">
            <ul>
            <div className="alert alert-dismissible alert-warning">
                <h5>Our team</h5>
            </div>
                
                {
                    data.map(({name, age, position, telegramUrl}) => {
                    return <li>
                                <h5>{name}</h5> 
                                <span>{age}, {position}
                                    <i className="fa fa-telegram" data-container="body" data-toggle="tooltip" data-placement="right" title={telegramUrl} data-original-title="Tooltip on right">

                                    </i>
                                </span> 
                            </li>
                    })    
                }
            </ul>
        </div>
    );
}

export default About;
