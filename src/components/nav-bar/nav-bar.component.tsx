import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Dropdown,
  Grid,
  Input,
  Menu,
  MenuProps,
  Modal,
  Space,
  Typography,
  theme,
} from "antd";
import {
  GlobalOutlined,
  SettingOutlined,
  RollbackOutlined,
  MailOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";
import style from "./nav-bar.style.module.css";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Title } = Typography;

export default function NavBar() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const user = JSON.parse(localStorage.getItem("user") || "{}") as any;

  const [current, setCurrent] = useState("");
  const [username, setUsername] = useState<string>(user.username);
  const [email, setEmail] = useState<string>(user.email);
  const [telephone, setTelephone] = useState<string>(user.telephone);
  const [fio, setFio] = useState<string>(user.fio);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { token } = useToken();
  const screens = useBreakpoint();
  const { lang, setLang } = useContext(NavBarContext);
  const navigate = useNavigate();

  const langSelectItems: MenuProps["items"] = [
    {
      key: "ENG",
      label: <>English</>,
    },
    {
      key: "TJK",
      label: <>Tajik</>,
    },
    {
      key: "UZB",
      label: <>Uzbek</>,
    },
  ];

  const menuItems: MenuProps["items"] = [
    {
      disabled: !localStorage.getItem("user"),
      label: language["checkRating"][lang],
      key: "rating",
    },
    {
      label: language["category"][lang],
      key: "category",
    },
    {
      label: language["comments"][lang],
      key: "comments",
    },
  ];

  // ---------------------------------------------------------------------------
  // function
  // ---------------------------------------------------------------------------

  const onClick = (e: { key: string }) => {
    navigate(`/${e.key}`);
    setCurrent(e.key);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ ...user, username, email, fio, telephone })
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setUsername(user.username);
    setEmail(user.email);
    setFio(user.fio);
    setTelephone(user.telephone);
    setIsModalOpen(false);
  };

  // ---------------------------------------------------------------------------
  // styles
  // ---------------------------------------------------------------------------

  const styles = {
    container: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      maxWidth: token.screenXL,
      padding: screens.md
        ? `0px ${token.paddingLG}px`
        : `0px ${token.padding}px`,
    },
    header: {
      backgroundColor: token.colorBgContainer,
      borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      position: "relative",
    },
    logo: {
      display: "block",
      // height: token.sizeLG,
      left: "50%",
      // position: screens.md ? "static" : "absolute",
      top: "50%",
      // transform: screens.md ? " " : "translate(-50%, -50%)",
    },
    menu: {
      backgroundColor: "transparent",
      borderBottom: "none",
      lineHeight: screens.sm ? "4rem" : "3.5rem",
      marginLeft: screens.md ? "0px" : `-${token.size}px`,
      width: screens.md ? "inherit" : token.sizeXXL,
    },
    menuContainer: {
      alignItems: "center",
      display: "flex",
      gap: token.size,
      width: "100%",
    },
  };

  // ---------------------------------------------------------------------------
  return (
    <>
      <nav style={{ ...styles.header, position: "relative" }}>
        <div style={styles.container}>
          <div style={styles.menuContainer}>
            <a
              style={{
                ...styles.logo,
                // position: screens.md ? "static" : "absolute",
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
              onClick={() => {
                navigate("/");
                setCurrent("");
              }}
            >
              {/* --------------------------------------------------------------------------- */}
              {/* LOGO */}
              {/* --------------------------------------------------------------------------- */}

              <img src="/logo.png" className={style.logoImage} />

              {/* --------------------------------------------------------------------------- */}
              {/* TITLE */}
              {/* --------------------------------------------------------------------------- */}

              <Title
                className={style.logoTitle}
                style={{ margin: 0 }}
                level={5}
              >
                DietFH
              </Title>
            </a>

            {/* --------------------------------------------------------------------------- */}
            {/* MENU */}
            {/* --------------------------------------------------------------------------- */}

            <Menu
              style={styles.menu}
              mode="horizontal"
              items={menuItems}
              onClick={onClick}
              selectedKeys={screens.md ? [current] : undefined}
              overflowedIndicator={
                <Button type="text" icon={<MenuOutlined />}></Button>
              }
            />
          </div>
          <Space>
            {/* --------------------------------------------------------------------------- */}
            {/* LANGUAGE SELECT */}
            {/* --------------------------------------------------------------------------- */}

            <Dropdown
              menu={{
                items: langSelectItems,
                selectable: true,
                defaultSelectedKeys: [lang],
                onClick: (elem) => {
                  setLang(elem.key as "ENG" | "TJK");
                },
              }}
              placement="bottomRight"
            >
              <Button type="text" icon={<GlobalOutlined />}></Button>
            </Dropdown>

            {/* --------------------------------------------------------------------------- */}
            {/* ACTIONS */}
            {/* --------------------------------------------------------------------------- */}

            {!localStorage.getItem("token") ? (
              <>
                {/* --------------------------------------------------------------------------- */}
                {/* LOG IN */}
                {/* --------------------------------------------------------------------------- */}

                <Button type="text" onClick={() => navigate("/sign-in")}>
                  Log in
                </Button>

                {/* --------------------------------------------------------------------------- */}
                {/* SIGN UP */}
                {/* --------------------------------------------------------------------------- */}

                <Button onClick={() => navigate("/sign-up")} type="primary">
                  Sign up
                </Button>
              </>
            ) : (
              <>
                {/* --------------------------------------------------------------------------- */}
                {/* USER SETTINGS */}
                {/* --------------------------------------------------------------------------- */}

                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "user",
                        label: <>Change User Settings</>,
                        icon: <SettingOutlined />,
                      },
                      {
                        key: "out",
                        label: <>Log out</>,
                        icon: <RollbackOutlined />,
                      },
                    ],
                    onClick: (elem) => {
                      if (elem.key === "out") {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        navigate("/");
                      }
                      if (elem.key === "user") {
                        showModal();
                      }
                    },
                  }}
                  placement="bottomRight"
                >
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Dropdown>
              </>
            )}
          </Space>
        </div>
      </nav>
      {/* --------------------------------------------------------------------------- */}
      {/* USER SETTINGS MODAL */}
      {/* --------------------------------------------------------------------------- */}

      <Modal
        title="User settings"
        closeIcon={false}
        open={isModalOpen}
        onOk={handleOk}
        okText="Save"
        onCancel={handleCancel}
      >
        <div className={style.modalWrapper}>
          {/* --------------------------------------------------------------------------- */}
          {/* USER NAME */}
          {/* --------------------------------------------------------------------------- */}

          <Input
            required
            prefix={<UserOutlined />}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="UserName"
          />

          {/* --------------------------------------------------------------------------- */}
          {/* EMAIL */}
          {/* --------------------------------------------------------------------------- */}

          <Input
            prefix={<MailOutlined />}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />

          {/* --------------------------------------------------------------------------- */}
          {/* FIO */}
          {/* --------------------------------------------------------------------------- */}

          <Input
            required
            placeholder="FIO"
            value={fio}
            onChange={(event) => setFio(event.target.value)}
          />

          {/* --------------------------------------------------------------------------- */}
          {/* TELEPHONE NUMBER */}
          {/* --------------------------------------------------------------------------- */}

          <Input
            placeholder="Telephone Number"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </div>
      </Modal>
    </>
  );
}
