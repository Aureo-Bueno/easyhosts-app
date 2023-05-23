import Menu from '../../components/Menu';
import * as S from './styles';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/*
Dados backend:
 public string Description (campo na tela)
 public Guid UserId (usuario id)
 public Guid EmployeeId - estatico (passar chumbado)
 public StatusOrderService - estatico (status enviado)
 public OrderServiceType Type - (limpeza, manutencao ou food )
*/

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
              Confirme o pedido de serviço
            </Text>
            <Text style={{ marginBottom: 20 }}>
              Você deseja confirmar o pedido de{' '}
              {selectedService && 'service' in selectedService ? selectedService.service : ''} para
              o seu quarto 31?
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
                onPress={handleConfirmService}>
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
