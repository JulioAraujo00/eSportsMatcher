import { ImageBackground } from "react-native";

import backGroundImg from "../../assets/games/Fundo.png";

import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function BackGround({ children }: Props) {
  return (
    <ImageBackground
      source={backGroundImg}
      style={styles.container}
      defaultSource={backGroundImg}
    >
      {children}
    </ImageBackground>
  );
}
