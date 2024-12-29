import { colors } from "@/styles/theme"
import { ActivityIndicator } from "react-native"
import { styles } from "./style"

export function Loaded(){
  return(
    <ActivityIndicator color={colors.green.base} style={styles.container} />
  )
}