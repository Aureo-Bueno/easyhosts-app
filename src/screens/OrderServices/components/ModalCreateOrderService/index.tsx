import { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { IModal } from './types';
import { useOrderServicesMutation } from '../../../../service/mutations/orderServices/services';
import Input from '../../../../components/Input';
import * as S from './styles';
import Modal from '../../../../components/Modal';
import { useGetProduct } from '../../../../service/queries/product';
import { IProduct } from '../../../../service/queries/product/types';
import { useOrderServicesWithProductMutation } from '../../../../service/mutations/orderServices/services/useOrderServiceWithProduct';
import { useGetBookingIdByUserIdOrderService } from '../../../../service/queries/booking';
import { AuthContext } from '../../../../context/AuthContext';
import { TypeService } from '../../../../service/@types/orderService';
import Button from '../../../../components/Button';

function ModalCreateOrderService({
  animationType,
  transparent,
  visible,
  handleCloseModal,
  userId,
  typeService,
}: IModal) {
  const [description, setDescription] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const { mutate, isLoading: loadingService } = useOrderServicesMutation();
  const { data } = useGetProduct();
  const { mutate: mutateWithProduct, isLoading: loadingWithProduct } =
    useOrderServicesWithProductMutation();
  const { user } = useContext(AuthContext);
  const { data: bookingByUser, isLoading } = useGetBookingIdByUserIdOrderService(user?.user.id);

  const options = data || [];

  const handleProdutChange = (value: string) => {
    setSelectedProduct(value);
  };

  const handlePostService = () => {
    mutate(
      {
        description,
        userId: userId,
        employeeId: null,
        type: typeService,
        bedroomId: bookingByUser?.bedroomId,
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

  const handlePostWithProductService = () => {
    mutateWithProduct(
      {
        description,
        userId: userId,
        employeeId: null,
        type: typeService,
        productId: selectedProduct,
        bedroomId: bookingByUser?.bedroomId,
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
          padding: 20,
        }}>
        <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: 3 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Solicitação de serviço
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            O seu pedido será de:{' '}
            {typeService === 1
              ? 'Limpeza'
              : typeService === 2
              ? 'Manutenção'
              : typeService === 3
              ? 'Comida'
              : ''}
          </Text>
          <Input
            placeholder='Descrição'
            onChangeText={(description) => {
              setDescription(description);
            }}
            value={description}
          />
          {typeService === 3 && (
            <S.Container>
              <S.Select
                items={options.map((option: IProduct) => ({
                  label: option.name,
                  value: option.id,
                }))}
                onValueChange={handleProdutChange}
                value={selectedProduct}
                placeholder={{
                  label: 'Selecione uma opção...',
                  value: null,
                }}
              />
            </S.Container>
          )}
          <S.View>
            {typeService === TypeService.CLEANING && (
              <Button
                title='Confirmar'
                onPress={handlePostService}
                size='lg'
                colorBackground='#04091D'
                loading={loadingService}
              />
            )}

            {typeService === TypeService.MAINTENANCE && (
              <Button
                title='Confirmar'
                onPress={handlePostService}
                size='lg'
                colorBackground='#04091D'
                loading={loadingService}
              />
            )}

            {typeService === TypeService.FOOD && (
              <Button
                title='Confirmar'
                onPress={handlePostWithProductService}
                size='lg'
                colorBackground='#04091D'
                loading={loadingWithProduct}
              />
            )}
            <Button title='Fechar' onPress={handleCloseModal} size='lg' colorBackground='#04091D' />
          </S.View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalCreateOrderService;
