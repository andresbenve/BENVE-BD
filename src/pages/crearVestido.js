import React from "react";
import router from "next/router";
function elegirCantidadVestidos() {
  return (
    <div>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/vestido/crearvestido1");
        }}
      >
        Crear 1 vestido
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/vestido/crearvestido2");
        }}
      >
        Crear 2 vestido
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/vestido/crearvestido3");
        }}
      >
        Crear 3 vestido
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/vestido/crearvestido4");
        }}
      >
        Crear 4 vestido
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/vestido/crearvestido5");
        }}
      >
        Crear 5 vestido
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/vestido/crearvestido6");
        }}
      >
        Crear 6 vestido
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/vestido/crearvestido7");
        }}
      >
        Crear 7 vestido
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/vestido/crearvestido8");
        }}
      >
        Crear 8 vestido
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/vestido/crearvestido9");
        }}
      >
        Crear 9 vestido
      </button>
    </div>
  );
}

export default elegirCantidadVestidos;
