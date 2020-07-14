var _this = this;
var jona = {
    nombre: 'jona',
    apellido: 'vargas',
    casado: false,
    estado: 'AC',
    imprimirUsuario: function (mensaje) {
        return 'el sms es' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        if (_this.sueldo) {
            return _this.sueldo + _this.sueldo * impuesto;
        }
        else {
            return 0;
        }
    },
    estadoActual: function () {
        if (_this.estado === 'AC') {
            return 'AP';
        }
        if (_this.estado === 'IN') {
            return 'AF';
        }
        else {
            return 'AT';
        }
    }
};
jona.imprimirUsuario('a');
