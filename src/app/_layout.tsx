import { Stack } from "expo-router";
import { colors } from "@/styles/theme"

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold
} from "@expo-google-fonts/rubik"
import { Loaded } from "@/components/loaded/indx";

export default function Layout(){

 const [ fontsloaded ]= useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
  })

  if(!fontsloaded){
    return <Loaded />
  }

  return(
    <Stack 
    screenOptions={{ 
      headerShown: false,
      contentStyle: {
        backgroundColor: colors.gray[100]
      }
     }} 
    />
  )
}