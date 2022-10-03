import { View, TouchableOpacity, Image } from "react-native";
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

export function GameScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const game: GameParams = route.params as GameParams;

  const handleGoBack = () => {
    navigation.goBack();
  };

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

        <DuoCard />
      </SafeAreaView>
    </Background>
  );
}
