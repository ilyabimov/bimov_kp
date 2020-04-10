let mongoose = require( 'mongoose' );

let serviceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    klient: {type: String, required: true, default: "Неизвестный Клиент"},
    telefon: {type: String, required: true},
    avto: {type: String, required: true},
    vin: {type: String, required: true},
    remont: {type: String, required: true},
    diagnost: {type: String, required: true},
    vid: {type: String, required: true},
    summ: {type: Number, required: true},
    dateStart: {type: Date, required: true, default: Date.now},
    dateFinish: {type: Date, required: true},
    userId: {type: Number, required: false}
});

// компиляция модели
mongoose.model('service', serviceSchema );

// наименование: "по ПМ.02 Осуществление интеграции программных модулей"
// обучающийся: "Фамилия Имя Отчество"
// Автомобиль: "3ИСиП-17-1"
// VIN номер: "09.02.07 Информационные системы и программирование"
// дата начала: "«23» сентября 2019 г."
// дата окончания: "«12»  октября 2019 г."
// общая оценка: "4"
// Клиент: "ФИО"