import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');

            if (!token) {
                navigate('/');
                return;
            }

            try {
                const response = await fetch('/api/users/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    localStorage.removeItem('authToken');
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle network error appropriately
            }
        };

        fetchUserData();
    }, [navigate]);

    if (!user) {
        return <div>Loading user data...</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>
            {user.avatar && <img src={`/images/avatars/${user.avatar}`} alt="User Avatar" />}
            {/* Add other dashboard content here */}
        </div>
    );
}

export default UserDashboard;