import { React, useState } from "react";
import ProductDesktop from "../desktop/ProductDesktop.js";

function ProductFeed({ products }) {
  const [Filas, setFilas] = useState(true);

  if (Filas) {
    return (
      <div className=" text-center">
        <div className="grid grid-flow-row-dense grid-cols-2 bg-white  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  mx-auto ">
          {/* la linea anterior es la que maneja el grid... jugar con el padding y el margin*/}
          {products
            .slice(0, 1)
            .map(
              ({ id, title, price, description, category, image, video }) => (
                <div key={id}>
                  <ProductDesktop
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    video={video}
                  />
                </div>
              )
            )}
          {products
            .slice(2, 4)
            .map(
              ({ id, title, price, description, category, image, video }) => (
                <div key={id}>
                  <ProductDesktop
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    video={video}
                  />
                </div>
              )
            )}
          {/*
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      */}

          {/*
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      */}

          <div className="col-span-2">
            {products
              .slice(4, 5)
              .map(
                ({ id, title, price, description, category, image, video }) => (
                  <div key={id}>
                    <ProductDesktop
                      key={id}
                      id={id}
                      title={title}
                      price={price}
                      description={description}
                      category={category}
                      image={image}
                      video={video}
                    />
                  </div>
                )
              )}
          </div>
          {products
            .slice(5, products.length)
            .map(
              ({ id, title, price, description, category, image, video }) => (
                <div key={id}>
                  <ProductDesktop
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    video={video}
                  />
                </div>
              )
            )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid grid-flow-row-dense grid-cols bg-white  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 md:-mt-52 mx-auto ">
        {/* la linea anterior es la que maneja el grid... jugar con el padding y el margin*/}
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image, video }) => (
            <div key={id}>
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                video={video}
              />
            </div>
          ))}
        {/*
        <img
          className="md:col-span-full"
          src="https://links.papareact.com/dyz"
          alt=""
        />
        */}
        <div className="md:col-span-2">
          {products
            .slice(4, 5)
            .map(
              ({ id, title, price, description, category, image, video }) => (
                <div key={id}>
                  <ProductDesktop
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    video={video}
                  />
                </div>
              )
            )}
        </div>
        {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image, video }) => (
            <div key={id}>
              <ProductDesktop
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                video={video}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default ProductFeed;
