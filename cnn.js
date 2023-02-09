const pgPromise = require('pg-promise');
const config = {
    host: 'containers-us-west-145.railway.app',
    port: '5528',
    database: 'railway',
    user: 'postgres',
    password: 'ovJBRciQbiXHzvA5pBVo'
};

const pgp = pgPromise({});
const db = pgp(config);

//db.any('select * from autor').then(res => { console.log(res)});

exports.db = db;