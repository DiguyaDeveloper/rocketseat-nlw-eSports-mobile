import { styles } from "./Home.styles";
import { FlatList, Image, View } from "react-native";
import LogoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading/Heading";
import { GameCard } from "../../components/GameCard/GameCard";
import { useEffect, useState } from "react";
import { Game } from "../../shared/interfaces/game.interface";

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://192.168.100.8:3333/games")
      .then((response) => response.json())
      .then((data: Game[]) => {
        setGames(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.logo}></Image>

      <Heading
        title="Encontre seu DUO!"
        subtitle="Selecione o game que deseja jogar..."
      ></Heading>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item }) => <GameCard data={item} />}
      ></FlatList>
    </View>
  );
}
