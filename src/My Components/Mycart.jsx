import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { NavLink } from "react-router-dom";

const Mycart = () => {
  const remove = () => {
    var removeCartItem = document.getElementsByClassName("fa fa-trash-alt");
    for (var i = 0; i < removeCartItem.length; i++) {
      var button = removeCartItem[i];
      button.addEventListener("click", function (event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
      });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <header>
              <div className="continue-shopping">
                <NavLink to="/shop">
                  <img
                    src="Images/backarrow.png"
                    alt="back"
                    className="arrow-icon"
                  />
                </NavLink>
                <h3>continue shopping</h3>
              </div>
              <div className="cart-icon">
                <img src="Images/cart.png" alt="cart" />
              </div>
            </header>

            <section className="main-cart-section">
              <h1 className="text-center">shopping cart</h1>
              <p className="total-items text-center">
                you have <span className="total-items-count">7</span> items in
                shopping cart
              </p>
              <div className="cart-items">
                <div className="cart-items-container">
                  <Scrollbars>
                    <div className="items-info">
                      <div className="product-img">
                        <img src="Images/categories1.jpg" alt="product" />
                      </div>

                      <div className="title">
                        <h2>Perfume</h2>
                        <p>for men</p>
                      </div>

                      <div className="add-minus-quantity">
                        <i className="fa fa-minus minus" aria-hidden="true"></i>
                        <input type="text" placeholder="1" />
                        <i className="fa fa-plus add" aria-hidden="true"></i>
                      </div>

                      <div className="price">
                        <h3>RS.2000</h3>
                      </div>

                      <div className="remove-item">
                        <i
                          className="fa fa-trash-alt remove"
                          aria-hidden="true"
                          onClick={remove}
                        ></i>
                      </div>
                    </div>
                    <hr />
                    <div className="items-info">
                      <div className="product-img">
                        <img src="Images/categories1.jpg" alt="product" />
                      </div>

                      <div className="title">
                        <h2>Perfume</h2>
                        <p>for men</p>
                      </div>

                      <div className="add-minus-quantity">
                        <i className="fa fa-minus minus" aria-hidden="true"></i>
                        <input type="text" placeholder="1" />
                        <i className="fa fa-plus add" aria-hidden="true"></i>
                      </div>

                      <div className="price">
                        <h3>RS.2000</h3>
                      </div>

                      <div className="remove-item">
                        <i
                          className="fa fa-trash-alt remove"
                          aria-hidden="true"
                          onClick={remove}
                        ></i>
                      </div>
                    </div>
                    <hr />
                    <div className="items-info">
                      <div className="product-img">
                        <img src="Images/categories1.jpg" alt="product" />
                      </div>

                      <div className="title">
                        <h2>Perfume</h2>
                        <p>for men</p>
                      </div>

                      <div className="add-minus-quantity">
                        <i className="fa fa-minus minus" aria-hidden="true"></i>
                        <input type="text" placeholder="1" />
                        <i className="fa fa-plus add" aria-hidden="true"></i>
                      </div>

                      <div className="price">
                        <h3>RS.2000</h3>
                      </div>

                      <div className="remove-item">
                        <i
                          className="fa fa-trash-alt remove"
                          aria-hidden="true"
                          onClick={remove}
                        ></i>
                      </div>
                    </div>
                    <hr />
                    <div className="items-info">
                      <div className="product-img">
                        <img src="Images/categories1.jpg" alt="product" />
                      </div>

                      <div className="title">
                        <h2>Perfume</h2>
                        <p>for men</p>
                      </div>

                      <div className="add-minus-quantity">
                        <i className="fa fa-minus minus" aria-hidden="true"></i>
                        <input type="text" placeholder="1" />
                        <i className="fa fa-plus add" aria-hidden="true"></i>
                      </div>

                      <div className="price">
                        <h3>RS.2000</h3>
                      </div>

                      <div className="remove-item">
                        <i
                          className="fa fa-trash-alt remove"
                          aria-hidden="true"
                          onClick={remove}
                        ></i>
                      </div>
                    </div>
                    <hr />
                    <div className="items-info">
                      <div className="product-img">
                        <img src="Images/categories1.jpg" alt="product" />
                      </div>

                      <div className="title">
                        <h2>Perfume</h2>
                        <p>for men</p>
                      </div>

                      <div className="add-minus-quantity">
                        <i className="fa fa-minus minus" aria-hidden="true"></i>
                        <input type="text" placeholder="1" />
                        <i className="fa fa-plus add" aria-hidden="true"></i>
                      </div>

                      <div className="price">
                        <h3>RS.2000</h3>
                      </div>

                      <div className="remove-item">
                        <i
                          className="fa fa-trash-alt remove"
                          aria-hidden="true"
                          onClick={remove}
                        ></i>
                      </div>
                    </div>
                    <hr />
                    <div className="items-info">
                      <div className="product-img">
                        <img src="Images/categories1.jpg" alt="product" />
                      </div>

                      <div className="title">
                        <h2>Perfume</h2>
                        <p>for men</p>
                      </div>

                      <div className="add-minus-quantity">
                        <i className="fa fa-minus minus" aria-hidden="true"></i>
                        <input type="text" placeholder="1" />
                        <i className="fa fa-plus add" aria-hidden="true"></i>
                      </div>

                      <div className="price">
                        <h3>RS.2000</h3>
                      </div>

                      <div className="remove-item">
                        <i
                          className="fa fa-trash-alt remove"
                          aria-hidden="true"
                          onClick={remove}
                        ></i>
                      </div>
                    </div>
                    <hr />
                    <div className="items-info">
                      <div className="product-img">
                        <img src="Images/categories1.jpg" alt="product" />
                      </div>

                      <div className="title">
                        <h2>Perfume</h2>
                        <p>for men</p>
                      </div>

                      <div className="add-minus-quantity">
                        <i className="fa fa-minus minus" aria-hidden="true"></i>
                        <input type="text" placeholder="1" />
                        <i className="fa fa-plus add" aria-hidden="true"></i>
                      </div>

                      <div className="price">
                        <h3>RS.2000</h3>
                      </div>

                      <div className="remove-item">
                        <i
                          className="fa fa-trash-alt remove"
                          aria-hidden="true"
                          onClick={remove}
                        ></i>
                      </div>
                    </div>
                    <hr />
                  </Scrollbars>
                </div>
              </div>

              <div className="card-total">
                <h3>
                  Cart Total: <span>RS. 23000</span>
                </h3>
                <button>checkout</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mycart;
