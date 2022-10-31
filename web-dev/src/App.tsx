import "./styles/main.css";
import logoImg from "/Logo.svg";

import { GameBanner } from "./components/GameBanner";
import { CreateAdd } from "./components/CreateAdd";
import { LandingHeader } from "./components/LandingHeader";
import { useState, useEffect } from "react";

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
              bannerURL={game.bannerURL}
              title={game.title}
              adCount={game._count.ads}
            />
          );
        })}
      </div>
      <CreateAdd />
    </div>
  );
}

export default App;
