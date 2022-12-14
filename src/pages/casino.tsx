import { Button, Input, Divider, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

import LeftArrow from "../components/icons/LeftArrow";
import Search from "../components/icons/Search";
import { Category, Game } from "../interfaces";
import useAuth from "../lib/hooks/useAuth";

const Casino = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const { user, logout } = useAuth();

  useEffect(() => {
    setFilteredGames(
      games.filter((game) =>
        game.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, games]);

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
      <div className="flex flex-col md:flex-row gap-4 justify-between">
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
        <div>
          <Input
            rightSection={
              <div>
                <Search width={20} fill="gray" />
              </div>
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-8 mt-6 gap-8">
        <div className="col-span-8 md:col-span-6">
          <div>
            <Text size={20} weight={600}>
              Games
            </Text>
            <Divider className="mt-1 mb-4" />
            <div className="flex flex-col gap-4">
              {filteredGames.map((game) => (
                <GameCard key={game.code} game={game} />
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
                <div
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category);
                    setFilteredGames(
                      games.filter((game) =>
                        game.categoryIds.includes(category.id)
                      )
                    );
                  }}
                >
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
