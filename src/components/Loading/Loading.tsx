import { View, ActivityIndicator } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./Loading.styles";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY}></ActivityIndicator>
    </View>
  );
}
