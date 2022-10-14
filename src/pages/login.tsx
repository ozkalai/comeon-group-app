import React, { useState } from "react";
import { Button, Input } from "@mantine/core";

import useAuth from "../lib/hooks/useAuth";
import Person from "../components/icons/Person";
import Locked from "../components/icons/Locked";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="bg-white w-full sm:w-1/2 sm:mx-auto p-8 md:p-10">
      <form
        className="flex flex-col w-2/3 sm:w-2/6 mx-auto gap-5"
        onSubmit={handleSubmit}
      >
        <Input
          size="xs"
          icon={<Person width={16} fill="#8a8888" />}
          variant="unstyled"
          sx={{ border: "1px solid #8a8888", borderRadius: "4px" }}
          placeholder="Username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <Input
          variant="unstyled"
          size="xs"
          icon={<Locked width={12} fill="#8a8888" />}
          type="password"
          sx={{ border: "1px solid #8a8888", borderRadius: "4px" }}
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Button
          loading={loading}
          size="xs"
          className="w-1/2 mx-auto"
          leftIcon=""
          color="dark"
          variant="outline"
          type="submit"
        >
          Login
        </Button>
      </form>
      {error && (
        <p className="mt-4 text-sm text-red-500 text-center font-semibold">
          {error}
        </p>
      )}
    </div>
  );
};

export default Login;
