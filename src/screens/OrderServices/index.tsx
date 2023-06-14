import Menu from '../../components/Menu';
import * as S from './styles';
import {
  FlatList,
  View } from 'react-native';
import { Text } from '@rneui/themed';
import React,
{ useContext,
  useEffect,
  useState }
from 'react';
import { AuthContext } from '../../context/AuthContext';
import {
  IOrderServicesResponse,
  useGetOrderServiceById,
} from '../../service/queries/orderServices';
import { TypeService } from '../../service/@types/orderService';
import ModalCreateOrderService from './components/ModalCreateOrderService';

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
    renderItemStatusService
  }, [dataStatus]);

  return (
    <S.Container>
      <Menu headerText='Serviços' />
      <S.ContentContainer>
        <S.BlockContainer>
          <S.Block onPress={() => handleServiceClick(TypeService.CLEANING)}>
            <S.BlockText>Limpeza </S.BlockText>
          </S.Block>
        </S.BlockContainer>

        <S.BlockContainer>
          <S.Block onPress={() => handleServiceClick(TypeService.MAINTENANCE)}>
            <S.BlockText>Manutenção</S.BlockText>
          </S.Block>
        </S.BlockContainer>

        <S.BlockContainer>
          <S.Block onPress={() => handleServiceClick(TypeService.FOOD)}>
            <S.BlockText>Alimentação</S.BlockText>
          </S.Block>
        </S.BlockContainer>

        <FlatList
          ListHeaderComponent={<S.StatusTitle>Status das Solicitações</S.StatusTitle>}
          data={dataStatus}
          renderItem={renderItemStatusService}
          keyExtractor={(item) => item.id}
        />
      </S.ContentContainer>
      <ModalCreateOrderService
        typeService={typeService}
        animationType='slide'
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
