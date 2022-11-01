interface GameBannerProps {
  bannerURL: string;
  title: string;
  adCount: number;
}

export const GameBanner = (props: GameBannerProps) => {
  return (
    <a href="" className="relative rounded-md mr-1 ml-1 overflow-hidden">
      <img src={props.bannerURL} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white">{props.title} </strong>
        <span className="text-zinc-300 text-sm block">
          {props.adCount} {"anúncio(s)"}
        </span>
      </div>
    </a>
  );
};
