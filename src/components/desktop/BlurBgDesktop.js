import React from "react";
import Image from "next/image";

function BlurBg() {
  return (
    //<div className="grid grid-cols-4 "> Ojota, con los datos de benve me funcionaba de esta manera
    <div className="imageBlurBg">
      <Image
        src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/png-Fondo-veremos.png"
        height={1750}
        width={1500}
        objectfit="contain"
      />
    </div>
  );
}

export default BlurBg;
