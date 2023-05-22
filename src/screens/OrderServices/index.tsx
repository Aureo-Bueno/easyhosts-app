import Menu from '../../components/Menu';
import { View } from 'react-native';
import { Text } from '@rneui/themed';

function OrderServices() {

    return (
        <View>
            <Menu headerText="Serviços" />
            <Text>Serviços de Quarto</Text>
        </View>
    );
};

export default OrderServices;
