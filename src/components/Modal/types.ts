import { ReactNode } from "react";

export interface IModal {
  visible: boolean,
  animationType: Animation,
  transparent: boolean,
  handleCloseModal: () => void,
  children: ReactNode
}

export type Animation = 'none' | 'slide' | 'fade' | undefined;
