import { createContext, useState } from "react";

const AuthContext = createContext({});

function AuthProvider(propos){

    const [user, setUser] = useState ({});
    return <AuthContext.Provider value={{ user, setUser }}>
        {propos.children}   

    </AuthContext.Provider>
}

export {AuthProvider, AuthContext}