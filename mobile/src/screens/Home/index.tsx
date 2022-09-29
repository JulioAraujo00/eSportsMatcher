import { View, Image, FlatList } from "react-native";

import logoIcon from "../../assets/games/Logo.png";
import { GameCard } from "../../components/GameCard/GameCard";
import { Heading } from "../../components/Heading";
import { GAMES } from "../../utils/GAMES";

import { styles } from "./styles";

const messages = {
  title: "Encontre seu duo",
  subtitle: "Selecione o game pra amassar:",
};

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoIcon} style={styles.logo} />
      <Heading title={messages.title} subtitle={messages.subtitle}></Heading>
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
