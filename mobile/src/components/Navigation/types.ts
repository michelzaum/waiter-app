import { ReactNode } from "react";

export interface NavigationItemsProps {
  label: string;
  Icon: ReactNode;
  onPress: () => void;
  isActive: boolean;
};
