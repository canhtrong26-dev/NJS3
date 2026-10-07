'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [role, setRole] = useState('user');

    const handleLogin = () => {
        document.cookie = `userRole=${role}; path=/`;
        alert(`Đăng nhập với vai trò ${role}`);
    };

    return (
        <div>
            <h1>Đăng Nhập</h1>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button onClick={handleLogin}>Đăng Nhập</button>
        </div>
    );
}