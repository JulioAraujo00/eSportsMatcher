import { MagnifyingGlassPlus } from "phosphor-react";

const messages = {
  dontFound: "Não encontrou seu duo?",
  foundPlayersByAdds: "Publique um anúncio para encontrar novos player",
  addsButton: "Publicar anúncio",
};

export const CreateAdd = () => {
  return (
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
  );
};
