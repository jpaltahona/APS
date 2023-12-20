import React from 'react'
import { Image, Divider  } from "native-base";
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {  Button, FormControl, Input, NativeBaseProvider, Center, Stack } from 'native-base';

const Auth = ({navigation}) => {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const validate = () => {
        if (formData.name === undefined) {
          setErrors({ ...errors,
            name: 'Name is required'
          });
          return false;
        } else if (formData.name.length < 3) {
          setErrors({ ...errors,
            name: 'Name is too short'
          });
          return false;
        }
    
        return true;
    };

    const onSubmit = () => {
        validate() ? console.log('Submitted') : console.log('Validation Failed');
      };
    
    
    return (
    <SafeAreaView style={styles.container}>
   <View>
   <Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text"  
        style={{ width: '100%', height: 250 }}
    />
    <View style={styles.containerCard}>
        <Text style={{ color: '#757575', fontSize: 16 , fontWeight: '700', marginBottom: 16}}>Sistema integral de información de Atención Primaria</Text>
        <Divider />
        <View style={{ marginVertical: 16 }}>
            <Text style={{ color: '#27285B', fontSize: 24 , fontWeight: '700', marginBottom: 16}}>
                Bienvenido! Inicia sesión con tu cuenta
            </Text>
            <Text style={{ color: '#757575', fontSize: 16 , fontWeight: '700', marginBottom: 16}}>
            Por favor ingresa tus credenciales para ingresar
            </Text>
        </View>

        <View>
        <Stack width="100%">
            <FormControl isRequired isInvalid={'name' in errors}>
                <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
                <Input placeholder="John" onChangeText={value => setData({ ...formData, name: value })} />
                {'name' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
                    Name should contain atleast 3 character.
                </FormControl.HelperText>}
            </FormControl>

            <FormControl isRequired isInvalid={'pass ' in errors}>
                <FormControl.Label _text={{ bold: true }}>Contraseña</FormControl.Label>
                <Input type="password" placeholder="Ingresar" onChangeText={value => setData({ ...formData, pass: value })} />
                {'pass' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
                   Ingresar Contraseña.
                </FormControl.HelperText>}
            </FormControl>

            <Button onPress={onSubmit} mt="5" padding={4} backgroundColor="#FF6708" borderRadius={10}>
                Iniciar sesión
            </Button>
            </Stack>
        </View>
       
    </View>
   </View>
       

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
    containerCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopEndRadius: 16, 
        borderTopLeftRadius: 16,
        position: 'relative',
        bottom: 16,
        height: '80%'
    }
});

export default Auth