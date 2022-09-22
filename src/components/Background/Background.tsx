import { ImageBackground } from "react-native";
import { styles } from "./Background.styles";
import { BackgroundImg } from "../../assets/background-galaxy.png";

interface Props {
  children: React.ReactNode;
}
export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={BackgroundImg}
      defaultSource={BackgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
