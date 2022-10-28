const messages = {
  your: "Seu",
  duo: "duo",
  isHere: "está aqui",
};

export const LandingHeader = () => {
  return (
    <h1 className="text-6xl text-white font-black mt-20">
      {messages.your}{" "}
      <span className="text-transparent bg-nlw-gradient bg-clip-text">
        {messages.duo}
      </span>{" "}
      {messages.isHere}
    </h1>
  );
};
