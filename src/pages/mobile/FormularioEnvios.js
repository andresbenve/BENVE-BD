import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function validate(input) {
  const errors = {};
  if (!input.Nombre) {
    errors.Nombre = "Completar Nombre *";
  }

  if (!input.Apellido) {
    errors.Apellido = "Completar Apellido *";
  }
  if (!input.Email) {
    errors.Email = "Completar Email *";
  }
  if (!input.Telefono) {
    errors.Telefono = "Completar Telefono *";
  }
  if (!input.Direccion) {
    errors.Direccion = "Completar Direccion *";
  }
  if (!input.CP) {
    errors.CP = "Completar CP *";
  }
  if (!input.Provincia) {
    errors.Provincia = "Completar Provincia *";
  }
  if (!input.Localidad) {
    errors.Localidad = "Completar Localidad *";
  }

  return errors;
}
function FormularioEnvios() {
  const [input, setInput] = useState({
    Nombre: "",
    Apellido: "",
    Email: "",
    Telefono: "",
    Direccion: "",
    CP: "",
    Provincia: "",
    Localidad: "",
  });
  const [errors, setErrors] = useState({});

  let Avanti = false;
  // NOTA: este useeffect no esta funcionando - revisar mas tarde con mas inspiracion
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      Avanti = true;
    } else {
      Avanti = false;
    }
  }, [input]);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className=" items-center justify-center content-center">
      <div className="ml-6 mt-1 text-sm">Nombre *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Nombre"
        type="text"
        name="Nombre"
        value={input.Nombre}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.Nombre && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.Nombre}</p>
      )}
      <div className="ml-6 mt-1 text-sm">Apellido *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Apellido"
        type="text"
        name="Apellido"
        value={input.Apellido}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.Apellido && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.Apellido}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">Email *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Email"
        type="text"
        name="Email"
        value={input.Email}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.Email && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.Email}</p>
      )}
      <div className="ml-6 mt-1 text-sm">Telefono *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Telefono"
        type="text"
        name="Telefono"
        value={input.Telefono}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.Telefono && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.Telefono}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">Direccion *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Direccion"
        type="text"
        name="Direccion"
        value={input.Direccion}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.Direccion && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.Direccion}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">CP *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="CP"
        type="text"
        name="CP"
        value={input.CP}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.CP && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.CP}</p>
      )}
      <div className="ml-6 mt-1 text-sm">Provincia *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Provincia"
        type="text"
        name="Provincia"
        value={input.Provincia}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.Provincia && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.Provincia}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">Localidad *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Localidad"
        type="text"
        name="Localidad"
        value={input.Localidad}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.Localidad && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.Localidad}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">Observaciones </div>
      <textarea
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        type="text"
        placeholder="Observaciones"
      />
      <div>
        {/* NOTA: cuando la persona hace la compra mando un post con los datos del formulario | lo que la persona compro | el metodo de envio que la persona alla elegido */}
        {Avanti ? (
          <div className="bg-gray-100 mt-4">
            {/* SI HAY ALGUN INPUT QUE ESTE INCOMPLETO TENGO QUE PONER LOS BOTONES EN DISABLE */}
            <div className="flex items-center justify-center  grid grid-cols-5 gap-0 flex flex-col flex-grow ">
              <h6 className="flex col-span-5 text-xs mr-7 justify-end">
                (10% de descuento)
              </h6>
              <div className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5 text-white mx-4 mb-0   ">
                PAGAR CON TRANSFERENCIA
              </div>
              <div className="flex items-center justify-center  font-bold buttonStripe col-span-5 text-white m-4 mb-0">
                PAGAR CON STRIPE
              </div>
              <div
                onClick={() =>
                  router.push("https://goo.gl/maps/G7UGC6o6U33C6Q8S9")
                }
                className="flex items-center justify-center  font-bold buttonMercadoPago col-span-5 text-white m-4 mb-0"
              >
                PAGAR CON MERCADO PAGO
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 mt-4">
            {/* SI HAY ALGUN INPUT QUE ESTE INCOMPLETO TENGO QUE PONER LOS BOTONES EN DISABLE */}
            <div
              onClick={() => {
                Swal.fire({
                  position: "center",
                  title: "BUENA DECISION",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1000,
                });
              }}
              className=" flex items-center justify-center  grid grid-cols-5 gap-0 flex flex-col flex-grow "
            >
              <h6 className="flex col-span-5 text-xs mr-7 justify-end">
                (10% de descuento)
              </h6>
              <div className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5 text-white mx-4 mb-0   ">
                PAGAR CON TRANSFERENCIA
              </div>
              <div
                onClick={() =>
                  router.push("https://goo.gl/maps/G7UGC6o6U33C6Q8S9")
                }
                className="flex items-center justify-center  font-bold buttonMercadoPago col-span-5 text-white m-4 mb-0"
              >
                PAGAR CON MERCADO PAGO
              </div>
              <div className="flex items-center justify-center  font-bold buttonStripe col-span-5 text-white m-4 mb-0">
                PAGAR CON STRIPE
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormularioEnvios;
