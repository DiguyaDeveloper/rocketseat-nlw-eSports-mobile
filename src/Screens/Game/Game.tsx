import { styles } from "./Game.styles";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background/Background";
import { GameParams } from "../../shared/interfaces/game-params.interface";

export function GameScreen() {
  const route = useRoute();
  const game: GameParams = route.params as GameParams;

  return (
    <Background>
      <SafeAreaView></SafeAreaView>
    </Background>
  );
}
