
export const RESTRICCIONES = {
    cif : {
        presence: {
            message: "^Campo CIF no puede quedar vacío."
        },
        format: {
            pattern: "^([abcdefghjklmnpqrsuvw])(\\d{7})([0-9a-j])$",
            flags: "i",
            message: "^'%{value}' no coincide con el patrón de CIF."
        }
    },
    "nombre-cliente" : {
        presence: {
            message: "^Nombre de cliente no puede quedar vacío."
        },
        length: {
            minimum: 3,
            tooShort: "^Nombre de cliente debe tener al menos %{count} letras.",
        },
        format: {
            pattern: "^[a-z]+(([',. -][a-z ])?[a-z]*)*$",
            flags: "i",
            message: "^'%{value}' contiene carácteres que no son letras."
        }
    },
    "nombre-empresa" : {
        presence: {
            message: "^Nombre de empresa no puede quedar vacío."
        },
        length: {
            minimum: 3,
            tooShort: "debe tener al menos %{count} carácteres.",
        }
    },
    direccion : {
        presence: {
            message: "no puede quedar vacía."
        },
        length: {
            minimum: 10,
            tooShort: "debe tener al menos %{count} carácteres.",
        }
    },
    email : {
        presence: {
            message: "no puede quedar vacío."
        },
        email: {
            message: "^'%{value}' no coincide con el patrón de dirección email."
        },
        format: {
            pattern: "^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$",
            flags: "i",
            message: "^'%{value}' no coincide con el patrón de dirección email.",
        }
    },
    telefono : {
        presence: {
            message: "^Teléfono no puede estar vacío."
        },
        format: {
            pattern: "^(34|0034|34)?[6|7|8|9][0-9]{8}$",
            flags: "i",
            message: "^'%{value}' no coincide con el patrón de teléfono."
        },
        numericality: {
            onlyInteger: true,
        }
    },
    "fecha-entrada" : {
        presence: {
            message: "^Fecha de entrada no puede quedar vacía."
        },
        date: {
            earliest: moment().subtract(1, "years"),
            tooEarly: "^La fecha no puede ser más antigua que '%{date}'.",
            latest: moment(),
            tooLate: "^La fecha no puede pasar del día actual"
        }
    },
    marca : {
        presence: {
            message: "no puede quedar vacía."
        },
        length: {
            minimum: 3,
            tooShort: "debe tener al menos %{count} carácteres.",
        }
    },
    modelo : {
        presence: {
            message: "no puede quedar vacío."
        },
        length: {
            minimum: 3,
            tooShort: "debe tener al menos %{count} carácteres.",
        }
    },
    matricula : {
        presence: {
            message: "no puede quedar vacía.",
            tooShort: "debe tener al menos %{count} carácteres.",
        },
        length: {
            minimum: 8,
            maximum: 9,
            tooShort: "debe tener al menos %{count} carácteres.",
            tooLong: "no puede tener más que %{count} carácteres." 
        },
        format: {
            pattern: "^(([a-z]{1,2})(\\d{4})([a-z]{0,2}))$|^((E)(\\d{4})([a-z]{3}))$",
            flags: "i",
            message: "^El valor no cumple con ninguno de los patrones de mátriculas."
        }
    },
    potencia : {
        presence: {
            message: "^El campo no puede quedar vacío." 
        },
        numericality: {
            onlyInteger: true,
            notInteger: "^'%{value}' no es un valor númerico",
            strict: true,
            greaterThanOrEqualTo: 78,
            notGreaterThanOrEqualTo: "^El valor mínimo es %{count}.",
            lessThanOrEqualTo: 1973,
            notLessThanOrEqualTo: "^El valor máximo es %{count}."
        }
    },
    "num-puertas" : {
        presence: {
            message: "^Número de puertas no puede quedar vacío."
        },
        numericality: {
            onlyInteger: true,
            notInteger: "^'%{value}' no es un valor númerico",
            strict: true,
            greaterThanOrEqualTo: 1,
            notGreaterThanOrEqualTo: "^El valor mínimo es %{count}.",
            lessThanOrEqualTo: 5,
            notLessThanOrEqualTo: "^El valor máximo es %{count}."
        }
    },
    descripcion : {
        presence: {
            message: "no puede quedar vacía."
        },
        length: {
            minimum: 20,
            tooShort: "debe tener al menos %{count} carácteres.",
        }
    },
}