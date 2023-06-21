import Menu from '../../components/Menu';
import * as S from './styles';
import { FlatList } from 'react-native';
import { Divider } from '@rneui/themed';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useGetOrderServiceById } from '../../service/queries/orderServices';
import { TypeService } from '../../service/@types/orderService';
import ModalCreateOrderService from './components/ModalCreateOrderService';
import Button from '../../components/Button';
import { IOrderServicesResponse } from '../../service/queries/orderServices/@types';

function OrderServices() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [typeService, setTypeService] = useState<TypeService>(TypeService.CLEANING);
  const { user } = useContext(AuthContext);
  const { data: dataStatus } = useGetOrderServiceById(user?.user.id);

  const renderItemStatusService = ({ item }: { item: IOrderServicesResponse }) => (
    <>
      <S.TextDesc>Descrição: {item.description}</S.TextDesc>
      <S.TextStatus>
        Status:ㅤ
        {item.status === 1 ? (
          <S.Icon name="checkmark-circle-outline" size={24} color="#00d9ff" />
        ) : item.status === 2 ? (
          <S.Icon name="refresh-circle-outline" size={24} color="#ff9d00" />
        ) : item.status === 3 ? (
          <S.Icon name="remove-circle-outline" size={24} color="#039900" />
        ) : item.status === 4 ? (
          <S.Icon name="close-circle-outline" size={24} color="#990000" />
        ) : (
          ''
        )}
      </S.TextStatus>
      <Divider width={1} />
    </>
  );

  const handleServiceClick = (service: TypeService) => {
    setTypeService(service);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    renderItemStatusService;
  }, [dataStatus]);

  return (
    <S.Container>
      <Menu headerText="Serviços" />
      <S.ContentContainer>
        <Button
          title="Limpeza"
          colorBackground="#04091d"
          onPress={() => handleServiceClick(TypeService.CLEANING)}
          size="lg"
        />
        <Button
          title="Manutenção"
          colorBackground="#04091d"
          onPress={() => handleServiceClick(TypeService.MAINTENANCE)}
          size="lg"
        />
        <Button
          title="Alimentação"
          colorBackground="#04091d"
          onPress={() => handleServiceClick(TypeService.FOOD)}
          size="lg"
        />
        <FlatList
          ListHeaderComponent={<S.StatusTitle>Status das Solicitações</S.StatusTitle>}
          data={dataStatus}
          renderItem={renderItemStatusService}
          keyExtractor={(item) => item.id}
        />
      </S.ContentContainer>

      <ModalCreateOrderService
        typeService={typeService}
        animationType="slide"
        handleCloseModal={handleCloseModal}
        handleServiceClick={handleServiceClick}
        transparent={true}
        userId={user?.user.id}
        visible={modalVisible}
      />
    </S.Container>
  );
}

export default OrderServices;
