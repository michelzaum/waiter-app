import { ReactNode } from "react";
import { RootStackParamList, screenNames } from "../../routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type NavigationProps = {
  navigationProps: NativeStackScreenProps<RootStackParamList, screenNames>;
}

export interface NavigationItemsProps {
  label: string;
  Icon: ReactNode;
  onPress: () => void;
  isActive: boolean;
};
