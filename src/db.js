 import Dexie from 'dexie';

   const db = new Dexie('myDatabase');

   db.version(1).stores({ friends: '++id, name, age' });

   export {db};
