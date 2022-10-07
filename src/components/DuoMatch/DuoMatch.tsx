import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles } from "./DuoMatch.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";
import { THEME } from "../../theme";
import { Heading } from "../Heading/Heading";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
  const [isCopping, setIsCopping] = useState<boolean>(false);

  async function handleCopyDiscordClipboard() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);
    setIsCopping(false);
    Alert.alert(
      "Discord copiado!",
      "Usuário copiado para você colocar no Discord e encontrar a pessoa!"
    );
  }

  return (
    <Modal {...rest} transparent statusBarTranslucent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            ></MaterialIcons>
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          ></CheckCircle>

          <Heading
            title="Let's Play"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          ></Heading>

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordClipboard}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
