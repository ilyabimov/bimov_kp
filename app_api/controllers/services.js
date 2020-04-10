let mongoose = require('mongoose');
let service= mongoose.model('service');
let token = mongoose.model('token');
const h = require('../helpers/common');

module.exports.getAll = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    service.find({}, (err, services) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, services);
    });
};

module.exports.getOne = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    service.findById(req.params.id, (err, service) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, service);
    });
};

module.exports.create = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    // вот тут ошибка, например...
    // h.sendJsonResponse(res,406, {status: "error", message: "какая-то ошибка"});

    service.create(req.body, (err, service) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,201, service);
    });
};

module.exports.update = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    service.findById(req.params.id, (err, service) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }

        if(req.body.name){
            service.name = req.body.name;
        }
        if(req.body.klient){
            service.klient = req.body.klient;
        }
        if(req.body.telefon){
            service.telefon = req.body.telefon;
        }
        if(req.body.avto){
            service.avto = req.body.avto;
        }
        if(req.body.vin){
            service.vin = req.body.vin;
        }
        if(req.body.remont){
            service.remont = req.body.remont;
        }
        if(req.body.diagnost){
            service.diagnost = req.body.diagnost;
        }
        if(req.body.vid){
            service.vid = req.body.vid;
        }
        if(req.body.summ){
            service.summ = req.body.summ;
        }
        if(req.body.dateStart){
            service.dateStart = req.body.dateStart;
        }
        if(req.body.dateFinish){
            service.dateFinish = req.body.dateFinish;
        }

        service.save((err, service) => {
            if(err){
                h.sendJsonResponse(res,400, err);
            }
            h.sendJsonResponse(res,200, service);
        });

    });

};

module.exports.delete = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    service.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,204, null);
    });
};