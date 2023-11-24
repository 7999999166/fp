import Dexie from 'dexie';

   const db2 = new Dexie('myDatabase');

   db2.version(1).stores({ userInfo: '++id , jwt , userId , userName' });

   export {db2};