import { View, Text, Button } from 'react-native';
import { INavigationProps } from '../../types/navigation';

export default function Login({ navigation }:INavigationProps) {
    return (
        <View>
            <Text>Ola</Text>
            <Button title='Tela Home' onPress={() => navigation.navigate('Home')} />
        </View>
    )
}