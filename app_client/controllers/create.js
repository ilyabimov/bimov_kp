function createCtrl($http, $location) {
    let vm = this;
    vm.error = '';
    vm.title = "Добавление заказа";


    vm.formWasValidated = false;

    vm.formModel = {
        name: {
            valid: true,
            infoText: '',
            value: ''
        },
        klient: {
            valid: true,
            infoText: '',
            value: ''
        },
        telefon: {
            valid: true,
            infoText: '',
            value: ''
        },
        avto: {
            valid: true,
            infoText: '',
            value: ''
        },
        vin: {
            valid: true,
            infoText: '',
            value: ''
        },
        remont: {
            valid: true,
            infoText: '',
            value: ''
        },
        diagnost: {
            valid: true,
            infoText: '',
            value: ''
        },
        vid: {
            valid: true,
            infoText: '',
            value: ''
        },
        summ: {
            valid: true,
            infoText: '',
            value: ''
        },
        dateStart: {
            valid: true,
            infoText: '',
            value: new Date()
        },
        dateFinish: {
            valid: true,
            infoText: '',
            value: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
        }
    };

    vm.validate = function () {

        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;

        for (let field in vm.formModel){
            if(field!=='dateStart' && field!=='dateFinish'){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
            }
        }
    };

    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let p1 = $http.post('/api/services', {
            name: vm.formModel.name.value,
            klient: vm.formModel.klient.value,
            telefon: vm.formModel.telefon.value,
            avto: vm.formModel.avto.value,
            vin: vm.formModel.vin.value,
            remont: vm.formModel.remont.value,
            diagnost: vm.formModel.diagnost.value,
            vid: vm.formModel.vid.value,
            summ: vm.formModel.summ.value,
            dateStart: vm.formModel.dateStart.value,
            dateFinish: vm.formModel.dateFinish.value
        }, {
            headers : {
                token: localStorage.getItem('token')
            }
        });





        p1.then(res=>{
            console.log('success!');
            $location.path('/');
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add service: ', err);
        });
    }




}