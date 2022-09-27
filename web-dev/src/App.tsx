import "./styles/main.css";
import logoImg from "/Logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logotipo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-64">
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
    </div>
  );
}

export default App;
