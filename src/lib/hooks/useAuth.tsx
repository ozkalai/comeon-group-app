import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

interface User {
  name: string;
  avatar: string;
  event: string;
}

interface AuthContextType {
  user?: User;
  loading: boolean;
  error?: any;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  function login(username: string, password: string) {
    setLoading(true);

    fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        if (res.status === 400) {
          setError("Invalid username or password");
        }
        if (res.status === 200) {
          res.json().then((data) => {
            const { name, avatar, event } = data.player;
            setUser({
              name,
              avatar,
              event,
            });
            setError("");
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function logout() {
    setLoading(true);
    setUser(undefined);
    setLoading(false);
  }

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      logout,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
