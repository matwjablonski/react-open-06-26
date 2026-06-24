import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Search } from "./Search";
import { Provider } from "react-redux";
import { store } from "../../store/store";

test('should render the Search component', () => {
    render(
        <Provider store={store}>
            <Search />
        </Provider>
    );

    expect(screen.getByText('Wyszukiwarka książek')).toBeInTheDocument();
});