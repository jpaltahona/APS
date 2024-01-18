import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {  Button, FormControl, Input, Center, Stack, Select, CheckIcon, WarningOutlineIcon } from 'native-base';
import DatabaseService from '../../database';

const CreateUser = () => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    if (formData.name === undefined) {
      setErrors({ 
        ...errors,
        name: 'Name is required'
      });
      return false;
    } else if (formData.pass === undefined) {
      setErrors({ 
        ...errors,
        pass: 'pass is required'
      });
      return false;
    }

    return true;
};

const onSubmit = () => {
    validate() ;
    console.log(formData)
   let dataBase = new DatabaseService()
   dataBase.insertUsuario(formData)
};

  return (
    <ScrollView style={styles.container}>
      <Text style={ styles.titleSection} >Datos creación de usuario</Text>
      <Stack width="100%">
        <FormControl isRequired isInvalid={'doctype' in errors}>
            <FormControl.Label  _text={{ bold: true }} style={styles.labels}>Tipo de documento</FormControl.Label>
            <Select accessibilityLabel="Tipo de documento" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, doctype: value }) }
            >
              <Select.Item label="C.C" value="CC" />
              <Select.Item label="Tarjeta de identidad" value="Ti" />
              <Select.Item label="Pasaporte" value="PS" />
            </Select>
            {'doctype' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'docNum' in errors}>
          <FormControl.Label _text={{ bold: true }} style={styles.labels}>N° de documento</FormControl.Label>
          <Input 
            placeholder="11111" 
            onChangeText={value => setData({ ...formData, docNum: value })}
            style={styles.inputs}
          />
          {'docNum' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'name' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }} style={styles.labels}>Nombres y Apellidos</FormControl.Label>
          <Input type="text" 
            placeholder="Nombre"
            onChangeText={value => setData({ ...formData, name: value })}
            style={styles.inputs}
          />
          {'name' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={'email' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }} style={styles.labels}>Correo electrónico</FormControl.Label>
          <Input type='text' 
            placeholder="email"
            onChangeText={value => setData({ ...formData, email: value })}
            style={styles.inputs}
          />
          {'email' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={'dirr' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }} style={styles.labels}>Dirección de residencia</FormControl.Label>
          <Input type='text' 
            placeholder="Dirrecion"
            onChangeText={value => setData({ ...formData, dirr: value })}
            style={styles.inputs}
          />
          {'dirr' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={'phone' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }} style={styles.labels}>celuar</FormControl.Label>
          <Input type='text' 
            placeholder="celular"
            onChangeText={value => setData({ ...formData, phone: value })}
            style={styles.inputs}
          />
          {'phone' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={'cargo' in errors}>
            <FormControl.Label  _text={{ bold: true }} style={styles.labels}>Cargo</FormControl.Label>
            <Select accessibilityLabel="Tipo de documento" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} 
              />
            }}
            onValueChange={ value =>setData({ ...formData, cargo: value }) }
            >
              <Select.Item label="Aux. Enfermeria" value="Auxenfermeria" />
            </Select>
            {'cargo' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'team' in errors}>
            <FormControl.Label  _text={{ bold: true }} style={styles.labels}>Equipo de trabajo</FormControl.Label>
            <Select accessibilityLabel="Tipo de documento" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, team: value }) }
            >
              <Select.Item label="PIC" value="PIC" />
            </Select>
            {'team' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'subRegion' in errors}>
            <FormControl.Label  _text={{ bold: true }} style={styles.labels}>Subregion</FormControl.Label>
            <Select accessibilityLabel="subRegion" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, subRegion: value }) }
            >
              <Select.Item label="Sub Region" value="subRegion" />
            </Select>
            {'subRegion' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'municipio' in errors}>
            <FormControl.Label  _text={{ bold: true }} style={styles.labels}>Municipio</FormControl.Label>
            <Select accessibilityLabel="municipio" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, municipio: value }) }
            >
              <Select.Item label="Municipio" value="municipio" />
            </Select>
            {'municipio' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'microterritorio' in errors}>
            <FormControl.Label  _text={{ bold: true }} style={styles.labels}>Microterritorio</FormControl.Label>
            <Select accessibilityLabel="microterritorio" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, microterritorio: value }) }
            >
              <Select.Item label="Microterritorio" value="microterritorio" />
            </Select>
            {'microterritorio' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'Ubicacion' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }} style={styles.labels}>Ubicacion</FormControl.Label>
          <Input type='text' 
            placeholder="Ubicacion"
            onChangeText={value => setData({ ...formData, Ubicacion: value })}
            style={styles.inputs}
          />
          {'Ubicacion' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={'nTerritorio' in errors}>
            <FormControl.Label  _text={{ bold: true }} style={styles.labels}>N. territorio</FormControl.Label>
            <Select accessibilityLabel="nTerritorio" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }}
            onValueChange={ value =>setData({ ...formData, nTerritorio: value }) }
            >
              <Select.Item label="1Rural" value="1Rural" />
            </Select>
            {'nTerritorio' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'divisiongeografica' in errors}>
            <FormControl.Label  _text={{ bold: true }} style={styles.labels}>Division geografica</FormControl.Label>
            <Select accessibilityLabel="Division geografica" placeholder="Seleccione" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5}
              
              />
            }}
            onValueChange={ value =>setData({ ...formData, divisiongeografica: value }) }
            >
              <Select.Item label="Centro Poblado" value="centroPoblado" />
            </Select>
            {'divisiongeografica' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> }
        </FormControl>

        <FormControl isRequired isInvalid={'zona' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }} style={styles.labels}>Zona</FormControl.Label>
          <Input type='text' 
            placeholder="zona"
            onChangeText={value => setData({ ...formData, hopital: value })}
            style={styles.inputs}
          />
          {'zona' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={'hospital' in errors} style={{ marginTop: 16 }}>
          <FormControl.Label _text={{ bold: true }} style={styles.labels}>hospital</FormControl.Label>
          <Input type='text' 
            placeholder="hospital"
            onChangeText={value => setData({ ...formData, hospital: value })}
            style={styles.inputs}
          />
          {'hospital' in errors && <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>}
        </FormControl>

        <Button onPress={onSubmit} mt="5" padding={4} backgroundColor="#FF6708" borderRadius={10} marginBottom={10}>
            Crear usuario
        </Button>
      </Stack>
    </ScrollView>
  )
}

export default CreateUser

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  titleSection: {
    color: '#F26811',
    marginBottom: 20,
    fontWeight: '700'
  }
})