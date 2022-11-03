import { GameController } from "phosphor-react";
import { CreateAdd } from "../CreateAdd";
import { Input } from "./Input";

import * as Dialog from "@radix-ui/react-dialog";

const messages = {
  pubAdd: "Publique um anúncio",
  game: "Qual o game",
  nick: "Nome ou nickname",
  yearsPlaying: "Joga a quanto tempo?",
  discord: "Qual seu Discord?",
  weekDays: "Quando costuma jogar?",
  voiceChat: "Costumo me conectar ao chat de voz",
  cancel: "Cancelar",
  findDuo: "Encontrar duo",
};

export const Form = () => {
  return (
    <Dialog.Root>
      <CreateAdd />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content
          className="fixed bg-[#2a2634] py-8 px-10
      text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      rounded-lg w-[480px] shadow-lg shadow-black/25"
        >
          <Dialog.Title className="text-3xl font-black">
            {messages.pubAdd}
          </Dialog.Title>

          <form className="mt-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                {messages.game}
              </label>
              <Input
                type="text"
                id="game"
                placeholder="Selecione o game que deseja jogar"
              />
            </div>
            <div>
              <label htmlFor="name" className="flex flex-col gap-2 py-2">
                {messages.nick}
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Como se chama dentro do game?"
              />
            </div>
            <div>
              <div>
                <label
                  htmlFor="yearsPlaying"
                  className="flex flex-col gap-2 py-2"
                >
                  {messages.yearsPlaying}
                </label>
                <Input
                  id="yearsPlaying"
                  type="number"
                  placeholder="Tudo bem ser zero :D"
                />
              </div>
              <div>
                <label htmlFor="discord" className="flex flex-col gap-2 py-2">
                  {messages.discord}
                </label>
                <Input placeholder="User#0000" id="discord" type="text" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="weekDays" className="flex flex-col gap-2 py-2">
                  {messages.weekDays}
                </label>
                <button
                  type="button"
                  className="w-10 p-1 m-1 bg-zinc-900 rounded"
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-10 p-1 m-1 bg-zinc-900 rounded"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-10 p-1 m-1 bg-zinc-900 rounded"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-10 p-1 m-1 bg-zinc-900 rounded"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-10 p-1 m-1 bg-zinc-900 rounded"
                >
                  5
                </button>
                <button
                  type="button"
                  className="w-10 p-1 m-1 bg-zinc-900 rounded"
                >
                  6
                </button>
                <button
                  type="button"
                  className="w-10 p-1 m-1 bg-zinc-900 rounded"
                >
                  7
                </button>
              </div>
              <div className="py-2">
                <label htmlFor="hourStart">Qual horário?</label>
                <div className="flex place-content-evenly py-2">
                  <Input id="hourStart" type="time" placeholder="De" />

                  <Input id="hourEnd " type="time" placeholder="Até" />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Input type="checkbox" />
              {messages.voiceChat}
            </div>
            <footer className="flex place-content-evenly py-4 font-semibold">
              <div>
                <Dialog.Close
                  type="button"
                  className="bg-zinc-900 w-40 p-4 text-center rounded hover:bg-zinc-600"
                >
                  {messages.cancel}
                </Dialog.Close>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center bg-violet-500 hover:bg-violet-600  w-38 p-4 text-center rounded"
                >
                  {" "}
                  <GameController className="mr-2" />
                  {messages.findDuo}
                </button>
              </div>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
