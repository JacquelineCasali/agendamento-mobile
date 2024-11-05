import { createContext, useState } from "react";
const AuthContext = createContext({});

function AuthProvider(props){
    
    const [user,setUser]=useState({
      
            // id_user: 5,
            // name: "Mario",
            // email: "mario@teste.com.br",
            // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjo1LCJpYXQiOjE3MzA4Mjk2NTcsImV4cCI6MTc0MDgyOTY1Nn0.rQ0xy3Nx3z5HMGEzhoLmAflR5WltnwGs44u_995-o-w"
      
    });
    
    return <AuthContext.Provider value={{user,setUser}}>
        {/* devolve toda a aplicação */}
{props.children}
    </AuthContext.Provider>
}
export {AuthContext,AuthProvider}