import express from 'express';
import models from './models';

const app = express();
models.sequelize.sync();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'),()=> {
    console.log(app.get('port'), '번에서 대기중~!!')
})