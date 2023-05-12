import { View } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { styles } from './styles';
import React from 'react';
import { INavigation } from '../../@types';
import * as Animatable from 'react-native-animatable';


function Welcome({ navigation }: INavigation) {

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image animation="flipInY" source={require('../../assets/logo.jpg')} style={{ width: '100%' }} resizeMode="contain"></Animatable.Image>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerFormu}>
                <Text style={styles.title}>Realize reserva sem dor de cabeça!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <Button
                    title='Acessar'
                    titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                    buttonStyle={{
                        backgroundColor: '#04091D',
                        width: '50%',
                        borderRadius: 5,
                        marginTop: 40,
                        paddingVertical: 18,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('Login')}
                />
            </Animatable.View>
            
        </View>
    );
};

export default Welcome;
