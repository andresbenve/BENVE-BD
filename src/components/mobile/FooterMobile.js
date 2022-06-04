import { React, useState } from "react";
import Image from "next/image";
import {
  ChatAlt2Icon,
  ChatAltIcon,
  MenuIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { BookOpenIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";

import { signIn } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { motion } from "framer-motion";
import ListadoPopUp from "./ListadoPopUpMobile";
import FootMenu from "./FootCartMobile";
import FooterSearch from "./FooterSearchMobile";
import FooterChat from "./FooterChat";
import BlurBg from "../mobile/BlurBgMobile";

function Footer({ products }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    // https://stackoverflow.com/questions/68590184/tailwind-css-make-footer-always-stay-at-bottom-of-page
    // por ahora lo que mas me sirvio es la respuesta de viveks (no funciona)
    <footer className="fixed  bottom-0 z-50 w-full  bg-gray-100 grid grid-cols-5  content-evenly">
      {/* {Search} */}
      <div>
        {!isOpen2 ? (
          <HomeIcon
            onClick={() => {
              router.push("/");
              setIsOpen(false);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(false);
              setIsOpen5(false);
            }}
            objectfit="contain"
            className="h-12 pl-4 cursor-pointer"
            strokeWidth="1"
          />
        ) : (
          <>
            <HomeIcon
              onClick={() => setIsOpen2(!isOpen2)}
              objectfit="contain"
              className="h-12 pl-4 cursor-pointer"
              strokeWidth="1"
            />
            <div className="bottom-12 fixed bg-white w-full h-96  p-10">
              <button onClick={() => setIsOpen2(!isOpen2)}>X</button>
              <p> uno</p>
              <p> dos</p>
              <p> tres</p>
            </div>
          </>
        )}
      </div>

      {!isOpen4 ? (
        <SearchIcon
          onClick={() => {
            setIsOpen4(!isOpen4);
            setIsOpen3(false);
            setIsOpen(false);
            setIsOpen5(false);
          }}
          objectfit="contain"
          className="h-12 pl-4 cursor-pointer"
          strokeWidth="1"
        />
      ) : (
        <>
          <XIcon
            onClick={() => setIsOpen4(!isOpen4)}
            objectfit="contain"
            className="h-12 pl-4 cursor-pointer"
            strokeWidth="1"
          />
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 1000 }}
            initial={{ y: "25%" }}
            animate={{ y: "0%" }}
            onDragEnd={(event, isOpen4) => setIsOpen4(!isOpen4)}
            className=" top-0 fixed z-50"
            onClick={() => setIsOpen4(!isOpen4)}
          >
            <BlurBg />
          </motion.div>
          <motion.div
            className="bottom-12 fixed bg-gray-100 w-full h-120 z-50 p-5  rounded-t-3xl"
            drag="y"
            dragConstraints={{ top: 0, bottom: 1000 }}
            initial={{ y: "25%" }}
            animate={{ y: "0%" }}
            // onDragEnd={(event, isOpen4) => setIsOpen4(!isOpen4)}
          >
            <FooterSearch products={products} />
          </motion.div>
        </>
      )}

      {!isOpen3 ? (
        <ShoppingCartIcon
          onClick={() => {
            setIsOpen3(!isOpen3);
            setIsOpen4(false);
            setIsOpen5(false);
            setIsOpen(false);
          }}
          objectfit="contain"
          className="h-12 pl-4 cursor-pointer"
          strokeWidth="1"
        />
      ) : (
        <>
          <ShoppingCartIcon
            onClick={() => setIsOpen3(!isOpen3)}
            objectfit="contain"
            className="h-12 pl-4 cursor-pointer"
            strokeWidth="1"
          />
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 1000 }}
            initial={{ y: "25%" }}
            animate={{ y: "0%" }}
            onDragEnd={(event, isOpen3) => setIsOpen3(!isOpen3)}
            className=" top-0 fixed z-40"
            onClick={() => setIsOpen3(!isOpen3)}
          >
            <BlurBg />
          </motion.div>
          <motion.div
            className="bottom-12 fixed bg-gray-100 w-full h-120 z-50 p-10 rounded-t-3xl"
            drag="y"
            dragConstraints={{ top: 0, bottom: 1000 }}
            initial={{ y: "25%" }}
            animate={{ y: "0%" }}
            onDragEnd={(event, isOpen3) => setIsOpen3(!isOpen3)}
          >
            <FootMenu />
            <div>
              <div>
                <button
                  className="flex button items-center justify-center w-full"
                  onClick={() => {
                    setIsOpen3(!isOpen3);
                    setIsOpen4(false);
                    setIsOpen(false);
                    setIsOpen5(false);
                  }}
                >
                  ← Ir A Vestido Random
                </button>
              </div>
              <div>
                <button
                  className="flex button items-center justify-center w-full mt-4"
                  onClick={() => {
                    router.push("/checkout");
                    setIsOpen3(!isOpen3);
                  }}
                >
                  Cart →
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {!isOpen5 ? (
        <ChatAlt2Icon
          onClick={() => {
            setIsOpen5(!isOpen5);
            setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen(false);
          }}
          objectfit="contain"
          className="h-12 pl-4 cursor-pointer"
          strokeWidth="1"
        />
      ) : (
        <>
          <XIcon
            onClick={() => setIsOpen5(!isOpen5)}
            objectfit="contain"
            className="h-12 pl-4 cursor-pointer"
            strokeWidth="1"
          />
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 1000 }}
            initial={{ y: "25%" }}
            animate={{ y: "0%" }}
            onDragEnd={(event, isOpen) => {
              setIsOpen(false);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(false);
              setIsOpen5(false);
            }}
            className=" top-0 fixed z-50"
            onClick={() => {
              setIsOpen(false);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(false);
              setIsOpen5(false);
            }}
          >
            <BlurBg />
          </motion.div>
          <motion.div
            className="bottom-12 fixed bg-gray-100 w-full h-96 z-50 p-10 rounded-t-3xl"
            drag="y"
            dragConstraints={{ top: 0, bottom: 1000 }}
            initial={{ y: "25%" }}
            animate={{ y: "0%" }}
            onDragEnd={(event, isOpen) => {
              setIsOpen(false);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(false);
              setIsOpen5(false);
            }}
          >
            <FooterChat />
          </motion.div>
        </>
      )}

      {!isOpen ? (
        <MenuIcon
          onClick={() => {
            setIsOpen(!isOpen);
            setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen5(false);
          }}
          objectfit="contain"
          className="h-12 pl-4 cursor-pointer"
          strokeWidth="1"
        />
      ) : (
        <>
          <XIcon
            onClick={() => setIsOpen(!isOpen)}
            objectfit="contain"
            className="h-12 pl-4 cursor-pointer"
            strokeWidth="1"
          />
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 1000 }}
            initial={{ y: "25%" }}
            animate={{ y: "0%" }}
            onDragEnd={(event, isOpen) => {
              setIsOpen(false);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(false);
              setIsOpen5(false);
            }}
            className=" top-0 fixed z-50"
            onClick={() => {
              setIsOpen(false);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(false);
              setIsOpen5(false);
            }}
          >
            <BlurBg />
          </motion.div>
          <motion.div
            className="bottom-12 fixed bg-gray-100 w-full h-96 z-50 p-10 rounded-t-3xl"
            drag="y"
            dragConstraints={{ top: 0, bottom: 1000 }}
            initial={{ y: "25%" }}
            animate={{ y: "0%" }}
            onDragEnd={(event, isOpen) => {
              setIsOpen(false);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(false);
              setIsOpen5(false);
            }}
          >
            <ListadoPopUp />
          </motion.div>
        </>
      )}

      {/* {bottom} */}
    </footer>
  );
}

export default Footer;
