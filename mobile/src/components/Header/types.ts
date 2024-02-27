import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, screenNames } from "../../routes";

export interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
  navigationProps: NativeStackScreenProps<RootStackParamList, screenNames>
};
