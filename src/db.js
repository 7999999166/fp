 import Dexie from 'dexie';

   const db = new Dexie('myDatabase');

   db.version(1).stores({ order: '++id , Productname , Price , Quantity , Amount ' });

   export {db};
