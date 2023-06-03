import { useState } from 'react';
import { Modal as NAModal, View, TextInput, Text, Alert } from 'react-native';
import { useOrderServicesMutation } from '../../service/mutations/orderServices/services';
import { IOrderService, TypeService } from '../../service/@types/orderService';
import Button from '../Button';
import * as S from './styles';
import { IModal } from './types';

function Modal({ animationType, transparent, visible, handleCloseModal, userId, typeService }: IModal) {
  const [description, setDescription] = useState('');
  const [selectedService, setSelectedService] = useState<TypeService>();
  const { mutate, isLoading } = useOrderServicesMutation();

  const handlePostService = () => {
    mutate(
      {
        description,
        userId: userId,
        employeeId: null,
        typeService: selectedService,
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
          <TextInput
            style={{
              borderWidth: 1,
              height: 40,
              fontSize: 16,
              borderRadius: 5,
              marginTop: 15,
              paddingHorizontal: 10,
              borderColor: '#d5d5d5',
            }}
            placeholder="Descrição"
            onChangeText={(description) => {
              setDescription(description);
            }}
            value={description}
          />
          {typeService === 3 &&
            <TextInput />
          }
          <S.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
            <Button
              title='Confirmar'
              onPress={handlePostService}
            />
            <Button
              title='Fechar'
              onPress={handleCloseModal}
            />
          </S.View>
        </View>
      </View>
    </NAModal>
  );
}

export default Modal;
