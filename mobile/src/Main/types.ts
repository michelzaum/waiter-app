import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, screenNames } from "../routes";

export type NavigationProps = NativeStackScreenProps<RootStackParamList, screenNames>;
