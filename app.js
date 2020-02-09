import { RESTRICCIONES } from "./modules/restricciones.js";
/* 

  AVISO : Por el hecho de utilizar módulos de ES6 es necesario
  utilizar localhost.

  En esta versión del formulario utilizamos librerías:
  
  - validateJS - para realizar todas las tareas de comprobar 
  valores de los campos sin apoyarnos en HTML (su caso es que 
  es poco fiable porque siempre se puede modificar la plantilla).
  
  - momentJS - para parsear fechas.
  
  - jQuery - aprovechamos que ya lo estamos utilizando para Bootstrap, 
  en este caso nos servirá para facilitar modificaciones de DOM.

  Lo que nos aporta: 
  - HTML más separado de lógica
  - El control de validación más clara
  - Menos escribir nosotros
  - Legibilidad de código
*/

const FORM = {
  form_node: $("#formulario-servicio"),
  submit_button: $("form button"),
  close_button: $("button.close"),
  data: {},

  init() {
    this.form_node.change(this.procesarCambio);
    this.submit_button.click(function(evento) {
      evento.preventDefault();
      FORM.procesarFormulario(FORM.form_node);
    });
    this.close_button.click(this.cerrarModal);
  },

  procesarCambio(evento) {
    if (evento.target !== evento.currentTarget && evento.target.tagName !== "BUTTON") {
      const errores = validate(this, RESTRICCIONES) || [];
      const campo = evento.target;
      FORM.mostrarErroresCampo(campo, errores[campo.name]);
    }
    evento.stopPropagation();
  },
  procesarFormulario(form) {
    const errores = validate(form, RESTRICCIONES);

    this.mostrarErrores(errores || {});

    if (!errores) {
      this.mostrarModal();
    }
  },

  mostrarErrores(errores) {
    $(
      `#formulario-servicio input[name], 
      #formulario-servicio textarea`
    ).each(function() {
      FORM.mostrarErroresCampo(this, errores && errores[this.name])
    });
  },

  mostrarErroresCampo(campo, errores) {
    const campo_mensajes = $(campo)
      .parent()
      .find(".alert-danger");
    $(campo_mensajes).hide();
    $(campo_mensajes)
      .find(".error-list")
      .empty();

    this.toggleValidationStyles(campo, errores);

    if (errores) {
      $(campo_mensajes).show();
      errores.forEach(error => this.mostrarMensaje(campo_mensajes, error));
    }
  },

  mostrarModal() {
    this.data = validate.collectFormValues(document.forms["formulario-servicio"]);

    for (let campo in this.data) {
      let nombre_normalizado = campo.toUpperCase().replace("-", " ");
      $(".modal-body").append(
        `<p><strong>${nombre_normalizado}:</strong> ${this.data[campo]}</p>`
      );
    }
    $("#modalRespuesta").modal("show");
  },

  toggleValidationStyles(campo, errores) {
    if (errores) {
      $(campo).removeClass("valid");
      $(campo).addClass("invalid");
    } else {
      $(campo).removeClass("invalid");
      $(campo).addClass("valid");
    }
  },

  mostrarMensaje(campo_mensajes, error) {
    $(campo_mensajes)
      .find(".error-list")
      .append(`<li>${error}</li>`);
  },

  cerrarModal: function() {
    $("#modalRespuesta").modal("hide");
  }
};

validate.extend(validate.validators.datetime, {
  // Lo hacemos porque en realidad el valor de fecha puede ser todo menos null o undefined
  parse: value => +moment.utc(value),
  // El input tiene forma de un timestamp
  format: (value, options) => {
    const format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
    return moment.utc(value).format(format);
  }
});

FORM.init();
