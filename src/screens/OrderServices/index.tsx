import Menu from '../../components/Menu';
import * as S from './styles';
import { FlatList, TextInput, View } from 'react-native';
import { Text } from '@rneui/themed';
import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IBookingResponse, useGetBookingId } from '../../service/queries/booking';
import { AuthContext } from '../../context/AuthContext';
import { useOrderServicesMutation } from '../../service/mutations/orderServices/services';
import { IOrderService, typeService, typeStatus } from '../../service/@types/orderService';

function OrderServices() {
  const [modalVisible, setModalVisible] = useState(false);
  const [statusList, setStatusList] = useState<
    { service: string; timestamp: string; status: string }[]
  >([]);
  const [selectedService, setSelectedService] = useState<
    { service: string; timestamp: string; status: string } | {}
  >({});

  const handleServiceClick = (service: string) => {
    setSelectedService({
      service: service,
      timestamp: new Date().toLocaleString(),
      status: 'EmEspera',
    });
    setModalVisible(true);
  };

  const handleConfirmService = () => {
    const { service, timestamp } = selectedService as { service: string; timestamp: string };
    const status = 'EmEspera';
    setModalVisible(false);
    setStatusList([...statusList, { service, timestamp, status }]);
    setSelectedService({});
    Alert.alert('Pedido confirmado', `O serviço de ${service} foi solicitado com sucesso!`);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedService({});
  };

  const statusInfo: { [status: string]: { icon: any; color: string } } = {
    EmEspera: { icon: 'ios-checkmark-circle', color: 'gray' },
    Fazendo: { icon: 'ios-construct', color: 'orange' },
    Concluido: { icon: 'ios-checkmark-circle', color: 'green' },
    Cancelado: { icon: 'ios-close-circle', color: 'red' },
  };

  const { user } = useContext(AuthContext);
  const { data } = useGetBookingId(user?.id);
  const renderItem = ({ item }: { item: IBookingResponse }) => (
    <Text>
      Forneça uma breve descrição do pedido de{' '}
      {selectedService && 'service' in selectedService ? selectedService.service : ''} para o seu
      quarto número {item.codeBooking}.
    </Text>
  );

  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');
  const [employeeId, setEmployee] = useState('');
  // const [status, setStatus] = useState('');
  // const [service, setType] = useState('');

  const { mutate, isLoading } = useOrderServicesMutation();

  const handlePostService = () => {
    mutate(
      {
        description,
        userId,
        employeeId,
        status: typeStatus.INPROGRESS,
        service: typeService.MAINTENANCE,
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
    <S.Container>
      <Menu headerText="Serviços" />
      <S.ContentContainer contentContainerStyle={{ paddingBottom: 20 }}>
        <S.BlockContainer>
          <S.Block onPress={() => handleServiceClick('Limpeza')}>
            <S.BlockText>Limpeza</S.BlockText>
          </S.Block>
        </S.BlockContainer>

        <S.BlockContainer>
          <S.Block onPress={() => handleServiceClick('Manutenção')}>
            <S.BlockText>Manutenção</S.BlockText>
          </S.Block>
        </S.BlockContainer>

        <S.BlockContainer>
          <S.Block onPress={() => handleServiceClick('Alimentação')}>
            <S.BlockText>Alimentação</S.BlockText>
          </S.Block>
        </S.BlockContainer>

        <S.StatusSection>
          <S.StatusTitle>Status das Solicitações</S.StatusTitle>
          {statusList.sort().map((status, index) => (
            <S.StatusItem key={index}>
              <Ionicons
                name={statusInfo[status.status].icon}
                size={24}
                color={statusInfo[status.status].color}
              />
              <S.StatusText>{`${status.service} - ${status.timestamp}`}</S.StatusText>
            </S.StatusItem>
          ))}
        </S.StatusSection>
      </S.ContentContainer>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
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
            <FlatList
              style={{
                flexGrow: 0,
              }}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.codeBooking.toString()}
            />

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
              placeholder="Usuário"
              onChangeText={(userId) => {
                setUserId(userId);
              }}
              value={userId}
            />
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
              placeholder="Funcionário"
              onChangeText={(employeeId) => {
                setEmployee(employeeId);
              }}
              value={employeeId}
            />
            {/* <TextInput
              style={{ backgroundColor: 'grey', borderWidth: 1, marginTop: 5 }}
              placeholder="STATUS"
              onChangeText={(status) => {
                setStatus(status);
              }}
              value={status}
            />
            <TextInput
              style={{ backgroundColor: 'grey', borderWidth: 1, marginTop: 5 }}
              placeholder="TIPO"
              onChangeText={(type) => {
                setType(type);
              }}
              value={type}
            /> */}
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
      </Modal>
    </S.Container>
  );
}

export default OrderServices;
