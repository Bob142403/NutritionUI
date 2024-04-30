import { Outlet } from "react-router-dom";

import NavBar from "../../components/nav-bar/nav-bar.component";
// import { theme } from "antd";

export const HomePage = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <>
      {/* --------------------------------------------------------------------------- */}
      {/* NAVBAR  */}
      {/* --------------------------------------------------------------------------- */}

      <NavBar />

      {/* <Content style={{ padding: "0" }}> */}
      <div
        style={{
          // background: colorBgContainer,
          flexGrow: 1,
        }}
      >
        <Outlet />
      </div>
      {/* </Content> */}
    </>
  );
};
