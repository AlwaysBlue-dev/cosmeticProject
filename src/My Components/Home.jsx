import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ComputerIcon from "@material-ui/icons/Computer";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Tooltip } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Home = () => {
  return (
    <>
      {/* ---starting carousel--- */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner mt-1">
          <div className="carousel-item active">
            <img src="Images/pic1.jpg" className="d-block w-100" alt="meat" />
          </div>
          <div className="carousel-item">
            <img src="Images/pic2.png" className="d-block w-100" alt="food" />
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
      {/* ---icons--- */}
      <div className="container-fluid">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row">
            <div className="card-group">
              <div className="card">
                <CheckCircleIcon class="check" />
                <div className="card-body">
                  <h1 className="card-title text-center">Best Quality</h1>
                  <p className="card-text text-center">
                    UK’s Best Halal Butchers & Grocers.
                  </p>
                </div>
              </div>
              <div className="card">
                <ComputerIcon class="check" />
                <div className="card-body">
                  <h1 className="card-title text-center">Online Payment</h1>
                  <p className="card-text text-center">
                    We care about your purchases!
                  </p>
                </div>
              </div>
              <div className="card">
                <LocalShippingIcon class="check" />
                <div className="card-body">
                  <h1 className="card-title text-center">Fast Delivery</h1>
                  <p className="card-text text-center">
                    Anywhere in United Kingdom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---top categories section--- */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <h2 className="top_category text-center">Our Top Categories</h2>
            <div className="gallery mt-5">
              <figure className="gallery__item gallery__item--1">
                <NavLink to={{ pathname: "/perfumes" }}>
                  <Tooltip title="CLICK FOR Buy">
                    <img
                      src="Images/categories1.jpg"
                      alt="Categories"
                      className="gallery__img"
                    />
                  </Tooltip>
                </NavLink>
              </figure>
              <figure className="gallery__item gallery__item--2">
                <NavLink to={{ pathname: "/perfumes" }}>
                  <Tooltip title="CLICK FOR Buy">
                    <img
                      src="Images/categories2.jpg"
                      alt="Categories"
                      className="gallery__img"
                    />
                  </Tooltip>
                </NavLink>
              </figure>
              <figure className="gallery__item gallery__item--3">
                <NavLink to={{ pathname: "/lipsticks" }}>
                  <Tooltip title="CLICK FOR Buy">
                    <img
                      src="Images/categories3.jpg"
                      alt="Categories"
                      className="gallery__img"
                    />
                  </Tooltip>
                </NavLink>
              </figure>
              <figure className="gallery__item gallery__item--4">
                <NavLink to={{ pathname: "/nailpolish" }}>
                  <Tooltip title="CLICK FOR Buy">
                    <img
                      src="Images/categories4.jpg"
                      alt="Categories"
                      className="gallery__img"
                    />
                  </Tooltip>
                </NavLink>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* ---lipsticks section--- */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <h2 className="lipsticks text-center">Lipsticks Products</h2>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/lipstick1.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/lipsticks" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
            <div className="card " style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/lipstick2.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/lipsticks" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/lipstick3.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/lipsticks" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/lipstick4.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/lipsticks" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---nailpolish section--- */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <h2 className="nailpolish text-center ">Nailpolish Products</h2>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/categories7.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/nailpolish" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
            <div className="card " style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/categories4.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/nailpolish" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/pic1.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/nailpolish" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/categories5.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/nailpolish" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---perfumes section--- */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <h2 className="nailpolish text-center ">Perfumes Products</h2>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/categories1.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/perfumes" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
            <div className="card " style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/categories2.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/perfumes" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/pic2.png"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/perfumes" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="Images/perfume.jpg"
                alt="Lipsticks"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="text-center font_style">RS.200</p>
                <NavLink to="/perfumes" className="btn btn-danger">
                  Buy <ShoppingCartIcon />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---reviews section--- */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <h2 className="reviews text-center ">😃 Happy Reviews 😃</h2>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src="https://image.ibb.co/jw55Ex/def_face.jpg"
                      className="img img-rounded img-fluid"
                      alt="profile"
                    />
                    <p className="text-secondary text-center">15 Minutes Ago</p>
                  </div>
                  <div className="col-md-10">
                    <p>
                      <strong>Anonymous</strong>
                      <span className="float-right">
                        <i className="text-warning fa fa-star"></i>
                      </span>
                      <span className="float-right">
                        <i className="text-warning fa fa-star"></i>
                      </span>
                      <span className="float-right">
                        <i className="text-warning fa fa-star"></i>
                      </span>
                      <span className="float-right">
                        <i className="text-warning fa fa-star"></i>
                      </span>
                    </p>
                    <div className="clearfix"></div>
                    <p>
                      Lorem Ipsum is simply dummy text of the pr make but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>

                <div className="card card-inner">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          src="https://image.ibb.co/jw55Ex/def_face.jpg"
                          className="img img-rounded img-fluid"
                          alt="profile"
                        />
                        <p className="text-secondary text-center">1hour Ago</p>
                      </div>
                      <div className="col-md-10">
                        <p>
                          <strong>Naz</strong>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the pr make but
                          also the leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-inner">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          src="https://image.ibb.co/jw55Ex/def_face.jpg"
                          className="img img-rounded img-fluid"
                          alt="profile"
                        />
                        <p className="text-secondary text-center">1hour Ago</p>
                      </div>
                      <div className="col-md-10">
                        <p>
                          <strong>Naz</strong>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the pr make but
                          also the leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-inner">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          src="https://image.ibb.co/jw55Ex/def_face.jpg"
                          className="img img-rounded img-fluid"
                          alt="profile"
                        />
                        <p className="text-secondary text-center">1hour Ago</p>
                      </div>
                      <div className="col-md-10">
                        <p>
                          <strong>Naz</strong>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the pr make but
                          also the leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card card-inner">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          src="https://image.ibb.co/jw55Ex/def_face.jpg"
                          className="img img-rounded img-fluid"
                          alt="profile"
                        />
                        <p className="text-secondary text-center">2 hour Ago</p>
                      </div>
                      <div className="col-md-10">
                        <p>
                          <strong>Shaz</strong>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                          <span className="float-right">
                            <i className="text-warning fa fa-star"></i>
                          </span>
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the pr make but
                          also the leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
