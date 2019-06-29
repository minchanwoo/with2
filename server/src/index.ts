import express from 'express';

const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'),()=> {
    console.log(app.get('port'), '번에서 대기중~!!')
})