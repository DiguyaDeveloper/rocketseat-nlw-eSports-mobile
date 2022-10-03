import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Game } from "../../shared/interfaces/game.interface";
import { THEME } from "../../theme";
import { styles } from "./GameCard.styles";

interface Props extends TouchableOpacityProps {
  data: Game;
}

export function GameCard({ data, ...rest }: Props) {
  const getAdsCount = (adsCount: number) => {
    if (!adsCount) {
      return `Sem anúncios`;
    }
    if (adsCount > 1) {
      return `${adsCount} anúncios`;
    }
    if (adsCount === 1) {
      return `${adsCount} anúncio`;
    }
  };
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{getAdsCount(data._count.Ads)}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
