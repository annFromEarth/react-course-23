import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../services/redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <main>
        <Outlet />
      </main>
    </Provider>
  );
}
