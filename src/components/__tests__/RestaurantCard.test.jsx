import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/ResCardMockData.json";


it("Should render restaurant component with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Pizza Hut");

  expect(resName).toBeInTheDocument();
});
