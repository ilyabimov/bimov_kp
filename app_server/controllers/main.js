let mongoose = require('mongoose');

//let config = mongoose.model('config');
//let service= mongoose.model('service');

module.exports.index = (req, res, next) => {

    // основные операции с данными с MongoDB

    // // создание записи в коллекции config:
    //
    // // объект для вставки в базу данных
    // let configRecord = {
    //     key: "шапка титульного листа",
    //     value: "МИНИСТЕРСТВО ОБРАЗОВАНИЯ, НАУКИ И МОЛОДЁЖНОЙ ПОЛИТИКИ НИЖЕГОРОДСКОЙ ОБЛАСТИ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ «НИЖЕГОРОДСКИЙ РАДИОТЕХНИЧЕСКИЙ КОЛЛЕДЖ»"
    // };
    //
    // // вызываем метод create модели config
    // config.create(configRecord, (err, config) => {
    //     // коллбэк при добавлении данных
    //     if(err){
    //         // если есть о
    //         res.render('index', { title: 'ERROR: ' + err });
    //     }
    //
    //     res.render('index', { title: 'CREATE OK: ' + JSON.stringify(config) });
    //
    // });

    // создание записи в коллекции service:

    // // объект для вставки в базу данных
    // let serviceRecord = {
    //     name: "по ПМ.02 Осуществление интеграции программных модулей",
    //     //klient: ,
    //     telefon: "Фамилия Имя Отчество",
    //     group: "3ИСиП-17-1",
    //     spec: "09.02.07 Информационные системы и программирование",
    //     //dateStart: ,
    //     dateFinish: Date.now()+6*24*60*60*1000,
    //     mark: "0"
    // };
    //
    // // вызываем метод create модели config
    // service.create(serviceRecord, (err, config) => {
    //     // коллбэк при добавлении данных
    //     if(err){
    //         // если есть о
    //         res.render('index', { title: 'ERROR: ' + err });
    //     }
    //
    //     res.render('index', { title: 'CREATE OK: ' + JSON.stringify(config) });
    //
    // });

    // изменение записи в коллекции service:
    // service.deleteMany({klient: "Неизвестный Клиент"}, (err) => {
    //         // коллбэк при удалении данных
    //         if (err) {
    //             // если есть ошибка
    //             res.render('index', {title: 'DELETE ERROR: ' + err});
    //         }
    //
    //         res.render('index', {title: 'DELETE OK.'});
    //     }
    // );


    res.render('index', {title: 'INFO: Смотрите закомментированный код в этом контроллере для изучения операций создания записей в коллекциях MongoDB'});

};