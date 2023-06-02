import { useState } from 'react';
import { TouchableOpacity, Modal as NAModal, View, TextInput, Text, Alert } from 'react-native';
import { useOrderServicesMutation } from '../../service/mutations/orderServices/services';
import { IOrderService, typeService } from '../../service/@types/orderService';

interface IModal {
  visible: boolean;
  animationType: Animation;
  transparent: boolean;
  userId: string | undefined;
  handleServiceClick: (service: typeService) => void;
  handleCloseModal: () => void;
}

type Animation = 'none' | 'slide' | 'fade' | undefined;

function Modal({ animationType, transparent, visible, handleCloseModal, userId }: IModal) {
  const [description, setDescription] = useState('');
  const [selectedService, setSelectedService] = useState<{ service: typeService } | {}>({});
  const { mutate, isLoading } = useOrderServicesMutation();

  const handlePostService = () => {
    const { service } = selectedService as { service: typeService };
    mutate(
      {
        description,
        userId: userId,
        employeeId: null,
        type: service,
      },
      {
        onSuccess: (orderData: IOrderService) => {
          // setValue(orderData);
          Alert.alert('Ordem de serviço', 'Cadastrado!', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        },
        onError: (error) => {
          Alert.alert('Erro ao cadastrar!', `Tente novamente mais tarde!`, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
            <TouchableOpacity
              style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
              onPress={handlePostService}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
              onPress={handleCloseModal}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NAModal>
  );
}

export default Modal;
