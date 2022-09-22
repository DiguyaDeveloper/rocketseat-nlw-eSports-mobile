import React from "react";
import { styles } from "./Home.styles";
import { FlatList, Image, View } from "react-native";
import LogoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading/Heading";
import { GameCard } from "../../components/GameCard/GameCard";
import { GAMES } from "../../utils/games";
export function Home() {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.logo}></Image>

      <Heading
        title="Encontre seu DUO!"
        subtitle="Selecione o game que deseja jogar..."
      ></Heading>

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item }) => <GameCard data={item} />}
      ></FlatList>
    </View>
  );
}
