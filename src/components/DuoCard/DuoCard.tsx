import { Text, TouchableOpacity, View } from "react-native";
import { GameAds } from "../../shared/interfaces/game-ads.interface";
import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo/DuoInfo";
import { styles } from "./DuoCard.styles";
import { GameController } from "phosphor-react-native";

interface DuoCardProps {
  data: GameAds;
}

export function DuoCard({ data }: DuoCardProps) {
  const getYearsPlaying = (years: number): string => {
    if (!years) {
      return "Nunca jogou";
    }
    if (years > 1) {
      return `${years} anos`;
    }
    return `${years} ano`;
  };

  const getAvailability = (data: GameAds): string => {
    return `${getAmountDays(data.AdWeekDays.length)} \u2022 ${
      data.hourStart
    } - ${data.hourEnd}`;
  };

  const getAmountDays = (days: number): string => {
    if (!days) {
      return "Nenhum dia";
    }
    if (days > 1) {
      return `${days} dias`;
    }
    return `${days} dia`;
  };

  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo
        label="Tempo de jogo"
        value={getYearsPlaying(data.yearPlaying)}
      />
      <DuoInfo label="Disponibilidade" value={getAvailability(data)} />
      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
