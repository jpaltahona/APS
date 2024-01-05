import { SQLite } from 'expo-sqlite';


function openDatabase() {
    const db = SQLite.openDatabase("aps.db");
    return db;  
}

async function getItem(){
    let list = [];
    await db.transaction(tx => {
        tx.executeSql('SELECT * FROM items;',[],(_, result) => {
            console.log('Consulta SELECT exitosa:', result);
            const { rows } = result;
        
            for (let i = 0; i < rows.length; i++) {
                list.push(rows.item(i))
            }
        },
        (_, error) => {
            console.error('Error al realizar la consulta SELECT:', error);
        }
        );
    });
    return list
}