import "./styles/main.css";
import logoImg from "/Logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

const messages = {
  your: "Seu",
  duo: "duo",
  isHere: "está aqui",
  dontFound: "Não encontrou seu duo?",
  foundPlayersByAdds: "Publique um anúncio para encontrar novos player",
  addsButton: "Publicar anúncio",
};

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logotipo" />
      <h1 className="text-6xl text-white font-black mt-20">
        {messages.your}{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          {messages.duo}
        </span>{" "}
        {messages.isHere}
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-8">
        <a href="" className="relative rounded-large overflow-hidden">
          <img src="./g1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white"> League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-large overflow-hidden">
          <img src="./g2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white"> Apex legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-large overflow-hidden">
          <img src="./g3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">
              {" "}
              Counter-Strike: GO
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-large overflow-hidden">
          <img src="./g4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white"> World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-large overflow-hidden">
          <img src="./g5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white"> Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-large overflow-hidden">
          <img src="./g6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white"> Fortnite </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              {messages.dontFound}
            </strong>{" "}
            <span className="text-zinc-400">{messages.foundPlayersByAdds}</span>
          </div>

          <button className=" flex gap-3 py-3 px-4 bg-violet-500 hover:bg-violet-600 duration-75 text-white rounded">
            <MagnifyingGlassPlus size={24} />
            {messages.addsButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
