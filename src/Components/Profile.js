import React from 'react';
import Navbar from './Navbar';
import '../CSS/Profile.css';
import { useUser } from './UserContext';

function Profile() {
    const { user, loading } = useUser();

    if (loading) {
        return <div>Loading user data...</div>;
    }

    if (!user) {
        return <div>No user found. Please log in.</div>;
    }

    return (
        <>
            <Navbar />
            <div className="profile-container">
                <header className="profile-header">
                    <h1>User Profile</h1>
                </header>
                <main className="profile-content">
                    <section className="user-info">
                        <h2>Personal Information</h2>
                        <div className="info-item">
                            <strong>Username:</strong>
                            <p>{user.username || 'N/A'}</p>
                        </div>
                        <div className="info-item">
                            <strong>Role:</strong>
                            <p>{user.role || 'N/A'}</p>
                        </div>
                        <div className="info-item">
                            <strong>Email:</strong>
                            <p>{user.email || 'N/A'}</p>
                        </div>
                        <div className="info-item">
                            <strong>Member since:</strong>
                            <p>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
                        </div>
                    </section>
                    <section className="user-stats">
                        <h2>Racing Statistics</h2>
                        <div className="info-item">
                            <strong>Team:</strong>
                            <p>{user.team || 'N/A'}</p>
                        </div>
                        <div className="info-item">
                            <strong>Overall Points:</strong>
                            <p>{user.overAllPoints || '0'}</p>
                        </div>
                        <div className="info-item">
                            <strong>DNFs:</strong>
                            <p>{user.dnfs || '0'}</p>
                        </div>
                        <div className="info-item">
                            <strong>Rating:</strong>
                            <p>{user.rating || 'N/A'}</p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Profile;