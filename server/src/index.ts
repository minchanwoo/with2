import bodyParser from 'body-parser';
import session from 'express-session';
import express from 'express';
import models from './models';
import routes from './routes';

const app = express();
models.sequelize.sync();

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

app.use('/', routes);

app.listen(app.get('port'),()=> {
    console.log(app.get('port'), '번에서 대기중~!!')
})