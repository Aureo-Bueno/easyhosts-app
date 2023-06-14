import { Modal as NAModal } from 'react-native';
import { IModal } from './types';

function Modal({ visible, animationType, handleCloseModal, transparent, children  }:IModal) {
  return(
    <NAModal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
      onRequestClose={handleCloseModal}>
        {children}
    </NAModal>
  );
};

export default Modal;
