import React from 'react';
import '../CSS/UserCard.css';

function UserCard({ user, onClose }) {
    return (
        <div className="user-card-overlay">
            <div className="user-card">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>{user.username}</h2>
                <p>Team: {user.team}</p>
                <p>Points: {user.points}</p>
                <p>Wins: {user.wins}</p>
                <p>Podiums: {user.podiums}</p>
                <p>Fast Laps: {user.fastLaps}</p>
                <p>DNFs: {user.dnfs}</p>
                <p>DSQs: {user.dsqs}</p>
            </div>
        </div>
    );
}

export default UserCard;