import React from "react";
import router from "next/router";
function CrearBuzo() {
  return (
    <div>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/buzos/crearbuzos1");
        }}
      >
        Crear 1 buzo
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/buzos/crearbuzos2");
        }}
      >
        Crear 2 buzo
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/buzos/crearbuzos3");
        }}
      >
        Crear 3 buzo
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/buzos/crearbuzos4");
        }}
      >
        Crear 4 buzo
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/buzos/crearbuzos5");
        }}
      >
        Crear 5 buzo
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/buzos/crearbuzos6");
        }}
      >
        Crear 6 buzo
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/buzos/crearbuzos7");
        }}
      >
        Crear 7 buzo
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/buzos/crearbuzos8");
        }}
      >
        Crear 8 buzo
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/buzos/crearbuzos9");
        }}
      >
        Crear 9 buzos
      </button>
    </div>
  );
}

export default CrearBuzo;
