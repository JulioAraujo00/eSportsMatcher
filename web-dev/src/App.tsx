import "./styles/main.css";
import logoImg from "/Logo.svg";

import { useState, useEffect } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { GameBanner } from "./components/GameBanner";
import { CreateAdd } from "./components/CreateAdd";
import { LandingHeader } from "./components/LandingHeader";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/Input";

interface Game {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number;
  };
}

function App() {
  // <> é chamado de generic (como um parâmetro de tipagem (ts only))
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []); //array de dependências. Caso seja passado vazio, o estado só será atualizado uma vez!

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logotipo" />
      <LandingHeader />

      <div className="grid grid-cols-6 gap-6 mt-8">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerURL={game.bannerURL}
              title={game.title}
              adCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdd />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content
            className="fixed bg-[#2a2634] py-8 px-10
              text-white top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              rounded-lg w-[488px] shadow-lg shadow-black/25"
          >
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome ou nickname</label>
                <Input id="nickname" placeholder="Insira seu nickname" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga a quanto tempo?</label>
                  <Input
                    id="yearsPlaying"
                    type="number"
                    placeholder="Tudo bem ser ZERO :D"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu id no Discord?</label>
                  <Input id="discord" type="text" placeholder="Usuario#0000" />
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 pl-[180px]">
                    <label htmlFor="hoursStart">Qual horário do dia?</label>
                    <div className="">
                      <div>
                        <Input id="hourStart" type="time" placeholder="De" />
                      </div>
                      <div>
                        <Input id="hourEnd" type="time" placeholder="Até" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2 text-sm ">
                <input type="checkbox" />
                Costumo usar o chat de voz
              </div>
              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
