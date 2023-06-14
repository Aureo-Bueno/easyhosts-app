import { useState } from 'react';
import { Modal as NAModal, View, Text, Alert } from 'react-native';
import { IModal } from './types';
import { useOrderServicesMutation } from '../../../../service/mutations/orderServices/services';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import * as S from './styles';
import Modal from '../../../../components/Modal';

function ModalCreateOrderService({ animationType, transparent, visible, handleCloseModal, userId, typeService }: IModal) {
  const [description, setDescription] = useState<string>('');
  const { mutate } = useOrderServicesMutation();
  const handlePostService = () => {
    mutate(
      {
        description,
        userId: userId,
        employeeId: null,
        type: typeService,
      },
      {
        onSuccess: (data) => {
          Alert.alert('Ordem de serviço', 'Cadastrado!', [
            {
              text: 'Cancel',
              onPress: handleCloseModal,
              style: 'cancel',
            },
            { text: 'OK', onPress: handleCloseModal },
          ]);
        },
        onError: () => {
          Alert.alert('Erro ao cadastrar!', `Tente novamente mais tarde!`, [
            {
              text: 'Cancel',
              onPress: handleCloseModal,
              style: 'cancel',
            },
            { text: 'OK', onPress: handleCloseModal },
          ]);
        },
      }
    );
  };

  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
      handleCloseModal={handleCloseModal}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Solicitação de serviço
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
           O seu pedido será de : {typeService === 1 ? 'Limpeza' :  typeService === 2 ? 'Manutenção' : typeService === 3 ? 'Comida' : ''}
          </Text>
          <Input placeholder='Descrição' onChangeText={(description) => {setDescription(description)}} value={description}/>
          {typeService === 3 &&
            <Input placeholder='Alimento'/>
          }
          <S.View>
            <Button title='Confirmar' onPress={handlePostService} size='lg' colorBackground='#04091D' />
            <Button title='Fechar' onPress={handleCloseModal} size='lg' colorBackground='#04091D' />
          </S.View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalCreateOrderService;
