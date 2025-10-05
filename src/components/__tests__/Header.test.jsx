import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login = screen.getByRole("button", { name: "Login" });

  expect(login).toBeInTheDocument();
});

it("Should check if cart items length are zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart (0)");

  expect(cartItem).toBeInTheDocument();
});

it("Should load the cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/); // this /cart/ is called a regex where we dont have to write the exact string of the item

  expect(cartItem).toBeInTheDocument();
});

it("Should change the login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login = screen.getByRole("button", { name: "Login" });

  const onClickLogin = fireEvent.click(login);

  const logout = screen.getByRole("button", { name: "Logout" });

  expect(logout).toBeInTheDocument();
});
