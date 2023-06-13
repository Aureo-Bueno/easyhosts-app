import { useState } from 'react';
import { Modal as NAModal, View, TextInput, Text, Alert } from 'react-native';
import { useOrderServicesMutation } from '../../service/mutations/orderServices/services';
import Button from '../Button';
import * as S from './styles';
import { IModal } from './types';
import Input from '../Input';

function Modal({ animationType, transparent, visible, handleCloseModal, userId, typeService }: IModal) {
  const [description, setDescription] = useState<string>('');
  const { mutate, isLoading } = useOrderServicesMutation();
  const handlePostService = () => {
    mutate(
      {
        description,
        userId: userId,
        employeeId: null,
        typeService,
      },
      {
        onSuccess: () => {
          Alert.alert('Ordem de serviço', 'Cadastrado!', [
            {
              text: 'Cancel',
              onPress: () => handleCloseModal,
              style: 'cancel',
            },
            { text: 'OK', onPress: () => handleCloseModal },
          ]);
        },
        onError: () => {
          Alert.alert('Erro ao cadastrar!', `Tente novamente mais tarde!`, [
            {
              text: 'Cancel',
              onPress: () => handleCloseModal,
              style: 'cancel',
            },
            { text: 'OK', onPress: handleCloseModal },
          ]);
        },
      }
    );
  };

  return (
    <NAModal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
      onRequestClose={handleCloseModal}>
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
          {/* {typeService === 3 &&
            <Input placeholder='Alimento'/>
          } */}
          <S.View>
            <Button title='Confirmar' onPress={handlePostService} size='lg' colorBackground='#04091D' />
            <Button title='Fechar' onPress={handleCloseModal} size='lg' colorBackground='#04091D' />
          </S.View>
        </View>
      </View>
    </NAModal>
  );
}

export default Modal;
