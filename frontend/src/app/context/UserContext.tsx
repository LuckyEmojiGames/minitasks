import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface User {
    name: string;
    role: "executor" | "customer";
    tasksCompleted: number;
    profilePicture?: string;
}

interface UserContextProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>({
        name: "snow",
        role: "executor",
        tasksCompleted: 0,
        profilePicture: undefined,
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
