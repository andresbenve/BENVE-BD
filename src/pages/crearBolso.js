import React from "react";
import router from "next/router";
function bolso() {
  return (
    <div>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/bolsos/bolso1");
        }}
      >
        Crear 1 bolsos
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/bolsos/bolso2");
        }}
      >
        Crear 2 bolsos
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/bolsos/bolso3");
        }}
      >
        Crear 3 bolsos
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/bolsos/bolso4");
        }}
      >
        Crear 4 bolsos
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/bolsos/bolso5");
        }}
      >
        Crear 5 bolsos
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/bolsos/bolso6");
        }}
      >
        Crear 6 bolsos
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/bolsos/bolso7");
        }}
      >
        Crear 7 bolsos
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/bolsos/bolso8");
        }}
      >
        Crear 8 bolsos
      </button>
      <button
        className="button m-4 mt-20"
        onClick={() => {
          router.push("https://benve-bd.vercel.app/bolsos/bolso9");
        }}
      >
        Crear 9 bolsos
      </button>
    </div>
  );
}

export default bolso;
