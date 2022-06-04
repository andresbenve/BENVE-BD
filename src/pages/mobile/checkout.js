import React from "react";
import Image from "next/image";
import HeaderMobile from "../../components/mobile/HeaderMobile";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import CheckoutProduct from "../../components/shared/CheckoutProduct";
import { useSession, signOut } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import FooterMobile from "../../components/mobile/FooterMobile";
import { useState, useEffect } from "react";
import router from "next/router";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const { data: session, status } = useSession();
  const total = useSelector(selectTotal);

  // async function createCheckoutSession() {
  //   const stripe = await stripePromise;

  //   // Call the backEnd to create a checkout session...
  //   const checkoutSession = await axios.post("/api/create-checkout-session", {
  //     items,
  //     email: session.user.email,
  //     //Redirect user/customer to Stripe Checkout
  //   });

  //   const result = await stripe.redirectToCheckout({
  //     sessionId: checkoutSession.data.id,
  //   });
  //   if (result.error) {
  //     alert(result.error.message);
  //   }
  // }

  const [page, setPage] = useState("home");
  const [hasLoaded, setHasLoaded] = useState(false);
  const appendSdkScript = () => {
    const script = document.createElement("script");
    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttribute("view", `${page}`);
    script.onload = () => setHasLoaded(true);
    document.body.append(script);
  };

  const fetchData = async (items) => {
    console.log("console items", items);

    fetch(
      `/api/preference?title=Benve&price=${total}&quantity=1&picture_url=https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png`
    )
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(
          `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${data.id}`
        );
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   appendSdkScript();
  // }, [page]);

  return (
    <div>
      <HeaderMobile />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/*  Left */}
        <div className="flex-grow m-5 shadow-sm">
          {/* <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectfit="contain"
          /> */}

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Ya encontraras tu match ideal ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥"
                : "Cart"}
            </h1>
            <h4>
              El envio tiene un costo de 500$ | Envio Gratis (Te parece algo
              asi?)
            </h4>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
        {/*  Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <div>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items ) :
                <span className="font-bold">{`${total} $`}</span>
              </h2>
              <button
                disable={!session}
                onClick={() => router.push("/mobile/FormularioEnvios")}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-200 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Completar Datos Del Envio" : "Proceed to Checkout"}
              </button>
              {/* NOTA: boton para pagar con mercado pago */}
              {/* <button
                disable={!session}
                onClick={() => fetchData(items)}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-200 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Pagar con Meli" : "Proceed to Checkout"}
              </button> */}
            </div>
          )}
        </div>
      </main>

      {/* 
      Nota: preguntarle a anita que piensa de hacer con el boton de mercado pago
      {items.length ? (
        <div className="fixed bottom-12 w-full center items-center flex buttonPagar items-center justify-center w-full text-white text-sm">
          PAGAR CON MERCADO PAGO
        </div>
      ) : (
        <div></div>
      )} */}
      <FooterMobile />
    </div>
  );
}

export default Checkout;
