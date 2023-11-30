import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div>I am a Root Layout</div> <Outlet />
    </>
  );
}
