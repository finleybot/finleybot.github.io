import React from 'react';
import './docs.css';

const Docs: React.FC  = () => {

    return (
        <div className="docs">
            <h3>Documentation</h3>
            <h6 className="text-muted">On this page you cand find a full list of commands which you can easily utilize in discord via our bot</h6>
            <table className="table table-hover">
            <thead>
                <tr className="table-info">
                    <th scope="row">#</th>
                    <td>Command</td>
                    <td>Options</td>
                    <td>Description</td>
                </tr> 
            </thead>
            <tbody>
                <tr className="table-active">
                    <th scope="row">1</th>
                    <td>play</td>
                    <td>[ url ]</td>
                    <td>Play music. url - uniform resource locator of song</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">2</th>
                    <td>game_rps</td>
                    <td></td>
                    <td>Play Rock, Paper, Scissors game with bot</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">3</th>
                    <td>youtube</td>
                    <td>[ text ]</td>
                    <td>Find video on youtube with such text</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">4</th>
                    <td>roll</td>
                    <td>[ number1, number2]</td>
                    <td>Get random value between two numbers</td>
                </tr>
                    
                <tr className="table-active">
                    <th scope="row">5</th>
                    <td>leave</td>
                    <td></td>
                    <td>Kick bot from voice channel</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">6</th>
                    <td>join</td>
                    <td></td>
                    <td>Add bot to voice channel. You must be in the voice chat.</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">7</th>
                    <td>user_mute</td>
                    <td>[ username ]</td>
                    <td>Mute user on server</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">8</th>
                    <td>time</td>
                    <td></td>
                    <td>Current local time in Kyiv</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">9</th>
                    <td>unban</td>
                    <td>[ username ]</td>
                    <td>Unban user do you want to unlock</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">10</th>
                    <td>ban</td>
                    <td>[ username ]</td>
                    <td>Ban user</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">11</th>
                    <td>kick</td>
                    <td>[ username ]</td>
                    <td>Kick user from server</td>
                </tr>
                <tr className="table-active">
                    <th scope="row">12</th>
                    <td>clear</td>
                    <td>[ number of messages ]</td>
                    <td>Clear certain number of messages in a chat menu</td>
                </tr>
            </tbody>
            </table> 
        </div>
    );
}

export default Docs;
