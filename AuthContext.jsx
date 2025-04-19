import { createContext, useState } from 'react';

export const AuthContext = createContext();

const users = [
    { email: 'sumit@example.com', password: '123456' },
    { email: 'sujal@example.com', password: 'abcdef' }
];

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function login(email, password) {
        const found = users.find((u) => u.email === email && u.password === password);
        if (found) {
            setUser({ email });
            return true;
        }
        return false;
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
