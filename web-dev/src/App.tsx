import "./styles/main.css";
import logoImg from "/Logo.svg";

import { GameBanner } from "./components/GameBanner";
import { CreateAdd } from "./components/CreateAdd";
import { LandingHeader } from "./components/LandingHeader";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logotipo" />
      <LandingHeader />
      <div className="grid grid-cols-6 gap-6 mt-8">
        <GameBanner bannerURL="/g1.png" title="League of Legends" adCount={4} />
        <GameBanner bannerURL="/g2.png" title="League of Legends" adCount={4} />
        <GameBanner bannerURL="/g3.png" title="League of Legends" adCount={4} />
        <GameBanner bannerURL="/g4.png" title="League of Legends" adCount={4} />
        <GameBanner bannerURL="/g5.png" title="League of Legends" adCount={4} />
        <GameBanner bannerURL="/g6.png" title="League of Legends" adCount={4} />
      </div>
      <CreateAdd />
    </div>
  );
}

export default App;
