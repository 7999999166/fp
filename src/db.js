 import Dexie from 'dexie';

   const db = new Dexie('myDatabase');
 
   db.version(1).stores({ order: '++id , Productname , Price , Quantity , Amount ,Count ' },);
   db.version(2).stores({ userInfo: '++id , jwt , userId , userName'});
   export {db};
