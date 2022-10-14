import React, { useState } from "react";
import { Divider, Button, Modal } from "@mantine/core";

import { Game } from "../interfaces";
import LeftArrow from "./icons/LeftArrow";
import getGameFrameUrl from "../lib/helper/getGameFrameUrl";

const GameCard = ({ game }: { game: Game }) => {
  const [opened, setOpened] = useState(false);
  const [frameUrl, setFrameUrl] = useState("");

  const handleOpen = () => {
    setOpened(true);
    const url = getGameFrameUrl(
      game.name.toLocaleLowerCase().replaceAll(" ", "")
    );
    setFrameUrl(url as string | "");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 py-2">
        <img
          src={game.icon}
          alt="logo"
          className="mb-4 w-full sm:w-40 sm:h-40"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-start text-xl font-semibold">{game.name}</h1>
          <p className="text-sm text-gray-500">{game.description}</p>
          <div className="flex justify-end items-center">
            <Button
              className="bg-black"
              color="dark"
              rightIcon={
                <LeftArrow className="rotate-180" width={10} color="white" />
              }
              onClick={() => {
                handleOpen();
              }}
            >
              Play
            </Button>
          </div>
        </div>
      </div>
      <Divider />
      <Modal
        size="100vw"
        opened={opened}
        onClose={() => setOpened(false)}
        title={game.name}
      >
        <div className="h-[400px] md:h-[800px]">
          <iframe
            title={game.name}
            src={frameUrl}
            className="w-full h-full"
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default GameCard;
