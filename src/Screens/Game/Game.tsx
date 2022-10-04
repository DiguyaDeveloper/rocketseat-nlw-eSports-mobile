import { View, TouchableOpacity, Image, FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./Game.styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background/Background";
import { GameParams } from "../../shared/interfaces/game-params.interface";
import { THEME } from "../../theme";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading/Heading";
import { DuoCard } from "../../components/DuoCard/DuoCard";
import { useEffect, useState } from "react";
import { GameAds } from "../../shared/interfaces/game-ads.interface";

export function GameScreen() {
  const [duos, setDuos] = useState<GameAds[]>([]);
  const navigation = useNavigation();
  const route = useRoute();
  const game: GameParams = route.params as GameParams;

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    console.log("game.id", game.id);
    fetch(`http://192.168.100.8:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data: GameAds[]) => {
        setDuos(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} />
            <Image source={logoImg} style={styles.logo} />
            <View style={styles.right}></View>
          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DuoCard data={item} />}
        />
      </SafeAreaView>
    </Background>
  );
}
