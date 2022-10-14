import { Divider, Button } from "@mantine/core";
import { Game } from "../interfaces";
import LeftArrow from "./icons/LeftArrow";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <div className="flex  gap-4 py-2">
        <img src={game.icon} alt="logo" className="w-40 h-40" />
        <div>
          <h1 className="text-start text-xl font-semibold">{game.name}</h1>
          <p className="text-sm text-gray-500">{game.description}</p>
          <div className="flex justify-end items-center">
            <Button
              className="bg-black"
              color="dark"
              rightIcon={
                <LeftArrow className="rotate-180" width={10} color="white" />
              }
              onClick={() => {}}
            >
              Play
            </Button>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default GameCard;
