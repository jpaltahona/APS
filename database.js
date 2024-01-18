import * as SQLite from 'expo-sqlite';


 export default class DatabaseService {
    constructor() {
      this.db = SQLite.openDatabase('miBaseDeDatos.db');
      this.createTable();
    }
  
    createTable() {
      this.db.transaction(tx => {
        tx.executeSql(`
          CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, 
            doctype TEXT,  docNum TEXT, name TEXT, email TEXT, dirr TEXT, phone TEXT, cargo TEXT,
            team TEXT, subRegion TEXT, municipio TEXT,  microterritorio TEXT, Ubicacion TEXT, nTerritorio TEXT,
            divisiongeografica TEXT, zona TEXT, hospital TEXT, 
            edad INTEGER)
          `
          );
      });
    }

    async getUsers(){
        console.log('initial')
        this.db.transaction(tx => {
           const result =  tx.executeSql(
              'SELECT * FROM usuarios',
              [],
              (_, result) => {
                // result.rows contiene los resultados de la consulta
                const usuarios = [];
                for (let i = 0; i < result.rows.length; i++) {
                  usuarios.push(result.rows.item(i));
                }
                console.log('Usuarios -> ',usuarios)
                retur(usuarios);
              },
              (_, error) => {
                console.error('Error al obtener usuarios', error);
                return null
              }
            );
            console.log(result)
          }); 
    }
    async insertUsuario(objData) {
        this.db.transaction(tx => {
          tx.executeSql(
            `INSERT INTO usuarios (doctype, docNum, name, email, dirr, phone, cargo, team, subRegion, municipio,  microterritorio, Ubicacion, nTerritorio, divisiongeografica, zona, hospital) 
            VALUES (${objData.doctype}, ${objData.docNum}, ${objData.name}, ${objData.email}, ${objData.dirr}, ${objData.phone}, ${objData.cargo}, ${objData.team}, ${objData.subRegion}, 
                ${objData.municipio}, ${objData.microterritorio}, ${objData.Ubicacion}, ${objData.nTerritorio}, ${objData.divisiongeografica}, ${objData.zona}, ${objData.hospital}
            )`,
            [],
            (_, result) => {
              console.log('Usuario insertado con éxito');
            },
            (_, error) => {
              console.error('Error al insertar el usuario', error);
            }
          );
        });
    }
  }