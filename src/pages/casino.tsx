import { Button, Input, Divider, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

import LeftArrow from "../components/icons/LeftArrow";
import { Category, Game } from "../interfaces";
import useAuth from "../lib/hooks/useAuth";

const Casino = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  const { user, logout } = useAuth();

  useEffect(() => {
    fetch("http://localhost:3001/categories", { method: "get" })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });

    fetch("http://localhost:3001/games", { method: "get" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      });
  }, []);

  return (
    <div className="bg-white container mx-auto flex flex-col p-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <img
              src={user?.avatar}
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-start text-xl font-semibold">{user?.name}</h1>
              <p className="text-sm text-gray-500">{user?.event}</p>
            </div>
          </div>
          <Button
            className="bg-black w-1/2"
            color="dark"
            leftIcon={<LeftArrow width={12} color="white" />}
            onClick={() => logout()}
          >
            Logout
          </Button>
        </div>
        <Input />
      </div>
      <div className="grid grid-cols-8 mt-6 gap-4">
        <div className="col-span-8 md:col-span-6">
          <div>
            <Text size={20} weight={600}>
              Games
            </Text>
            <Divider className="mt-1 mb-4" />
            <div className="flex flex-col gap-4">
              {games.map((game) => (
                <GameCard game={game} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:col-span-2 md:block">
          <div>
            <Text size={20} weight={600}>
              Categories
            </Text>
            <Divider className="mt-1" />
            <div className="mt-4 py-2">
              {categories.map((category) => (
                <div key={category.id} onClick={() => {}}>
                  <span className="cursor-pointer text-md font-semibold">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
