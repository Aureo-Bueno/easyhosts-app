import { TypeService } from '../../service/@types/orderService';

export interface IModal {
  visible: boolean;
  animationType: Animation;
  transparent: boolean;
  userId: string | undefined;
  handleServiceClick: (service: TypeService) => void;
  handleCloseModal: () => void;
  typeService: TypeService | undefined;
}

export type Animation = 'none' | 'slide' | 'fade' | undefined;
