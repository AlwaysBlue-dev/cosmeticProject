import React from "react";

const Description = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-8 col-12 mx-auto mt-5">
          <div className="row">
            <div className="description">
              <h1>DESCRIPTION OF OUR PRODUCTS</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="our_gallery text-center">OUR GALLERY</h2>
      <div className="col-md-12 col-12 mx-auto mt-5">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner mt-5">
            <div className="carousel-item active">
              <img
                src="Images/categories1.jpg"
                className="d-block w-100"
                alt="images"
              />
            </div>
            <div className="carousel-item">
              <img
                src="Images/categories2.jpg"
                className="d-block w-100"
                alt="images"
              />
            </div>
            <div className="carousel-item">
              <img
                src="Images/categories3.jpg"
                className="d-block w-100"
                alt="images"
              />
            </div>
            <div className="carousel-item">
              <img
                src="Images/categories4.jpg"
                className="d-block w-100"
                alt="images"
              />
            </div>
            <div className="carousel-item">
              <img
                src="Images/categories5.jpg"
                className="d-block w-100"
                alt="images"
              />
            </div>
            <div className="carousel-item">
              <img
                src="Images/categories6.jpg"
                className="d-block w-100"
                alt="images"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Description;

// {/* <div className="gallery mt-5">
// <figure className="gallery__item gallery__item--1">
//   <img
//     src="Images/categories1.jpg"
//     alt="imageslery"
//     className="gallery__img"
//   />
// </figure>
// <figure className="gallery__item gallery__item--2">
//   <img
//     src="Images/categories2.jpg"
//     alt="imageslery"
//     className="gallery__img"
//   />
// </figure>
// <figure className="gallery__item gallery__item--3">
//   <img
//     src="Images/categories3.jpg"
//     alt="imageslery"
//     className="gallery__img"
//   />
// </figure>
// <figure className="gallery__item gallery__item--4">
//   <img
//     src="Images/categories4.jpg"
//     alt="imageslery"
//     className="gallery__img"
//   />
// </figure>
// <figure className="gallery__item gallery__item--5">
//   <img
//     src="Images/categories5.jpg"
//     alt="imageslery"
//     className="gallery__img"
//   />
// </figure>
// <figure className="gallery__item gallery__item--6">
//   <img
//     src="Images/categories6.jpg"
//     alt="imageslery"
//     className="gallery__img"
//   />
// </figure>
// </div> */}
