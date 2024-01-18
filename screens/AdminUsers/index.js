import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Table, Row,  } from 'react-native-reanimated-table';
import { Button, Input} from "native-base";
import DatabaseService from '../../database';

const AdminUsers = (props) => {
  const [tableData, setTableData] = useState({
    tableHead: ['#', 'NOMBRES Y APELLIDOS', 'MICROTERRITORIO', 'UBICACION', 'N. TERRITORIO'],
    widthArr: [40, 170, 150, 120, 120 ],
    tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
    tableData: [
      ['1', '2', '3', '4', '5'],
      ['a', 'b', 'c', 'd', 'e'],
      ['1', '2', '3', '456\n789', 'hello'],
      ['a', 'b', 'c', 'd', '3']
    ]
  })
  console.log('props',props)
  const initializateServices = async () => {
    try {
      const databaseService = new DatabaseService();
      const users = await databaseService.getUsers();
      console.log('usuarios ', users)

    } catch (error) {
      console.log('error ', error)
    }
  }
  useEffect( () => {
    initializateServices()
  }, [] )

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  marginBottom: 17  }}>
        <Text style={styles.titleSection}>Administración de Usuarios</Text> 
        <Button bg='#FF6708' onPress={ () => props.navigation.navigate('CreateUser') }>
          <Text>Add</Text>
        </Button>
      </View>

      <View style={{ marginBottom: 17 }}>
        <Input placeholder="Busca por: N° Documento o nombre" w="100%" onChangeText={(e) => console.log(e)} />
      </View>

      <ScrollView horizontal={true}>
        <View style={{  borderWidth: 1, borderColor: '#EDEDED', borderRadius: 8, height: 'auto'}}>
          <Table borderStyle={{borderWidth: 0, borderColor: '#EDEDED'}}>
            <Row 
              data={tableData.tableHead} 
              widthArr={tableData.widthArr} 
              style={styles.header} 
              textStyle={styles.text}
            />
            
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 0, borderColor: '#ffffff'}}>
              {
                tableData.tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={tableData.widthArr}
                    style={[styles.row, index%2 && {backgroundColor: '#FFFFFF'}]}
                    textStyle={styles.text}
                  />
                ))
              }
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 40, backgroundColor: '#FFFFFF', borderWidth: 0 },
  text: { textAlign: 'center', fontWeight: '500', color: '#000' },
  dataWrapper: { marginTop: -1 , padding: 4},
  row: { height: 40, backgroundColor: '#F9F9F9', borderRadius: 8 },
  titleSection: { color: '#27285B', fontSize: 18, fontWeight: '800'}
});

export default AdminUsers