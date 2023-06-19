import Menu from '../../components/Menu';
import * as S from './styles';
import { FlatList, View } from 'react-native';
import { Text } from '@rneui/themed';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {
  IOrderServicesResponse,
  useGetOrderServiceById,
} from '../../service/queries/orderServices';
import { TypeService } from '../../service/@types/orderService';
import ModalCreateOrderService from './components/ModalCreateOrderService';
import Button from '../../components/Button';

function OrderServices() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [typeService, setTypeService] = useState<TypeService>(TypeService.CLEANING);
  const { user } = useContext(AuthContext);
  const { data: dataStatus } = useGetOrderServiceById(user?.user.id);

  const renderItemStatusService = ({ item }: { item: IOrderServicesResponse }) => (
    <View>
      <Text>
        Descrição: {item.description} / Status: {item.status}
      </Text>
    </View>
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
