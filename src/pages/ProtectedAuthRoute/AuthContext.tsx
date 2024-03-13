import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<{ children: any; user?: any }> = ({
  children,
  user,
}) => {
  const [currentUser, setUser] = useState<any>(user);

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user: currentUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
