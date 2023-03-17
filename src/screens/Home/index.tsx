import { Button, Text, View } from 'react-native';
import { styles } from '../../global/styles';
import { INavigationProps } from '../../types/navigation';

export default function Home({ navigation }:INavigationProps) {
    return (
        <View>
            <Text style={styles.text}>Ola</Text>
            <Button title='Tela Login' onPress={() => navigation.navigate('Login')} />
        </View>
    );
};
