import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  Button,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
  Grid,
  theme,
} from "antd";
import { GlobalOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";

import { authApi } from "../../api/auth";
import { NavBarContext } from "../../provider/NavBarProvider";
import { ToolsContext } from "../../provider/ToolsProvider";
import { language } from "../../lang/lang";

import { SignUpFieldsType } from "../../types/SignUpFields";
import { useQuery } from "react-query";
import { jsonServertApi } from "../../api/json-server";

dayjs.extend(customParseFormat);

const { Option } = Select;

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export const SignUp = () => {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const { data } = useQuery("getDistrict", jsonServertApi.getDistrict);
  const districts = data || [];

  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useToken();
  const screens = useBreakpoint();
  const [username, setUsername] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [districtOtherVisible, setDistrictOtherVisible] =
    useState<boolean>(false);
  // const [jamoatOtherVisible, setJamoatOtherVisible] = useState<boolean>(false);
  // const [villageOtherVisible, setVillageOtherVisible] =
  //   useState<boolean>(false);
  const [jamoat, setJamoat] = useState<string>("");
  const [village, setVillage] = useState<string>("");
  const [birthday, setBirthday] = useState<number>(2000);
  const [telephone, setTelephone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [fio, setFio] = useState<string>("");
  const [fromWho, setFromWho] = useState<string>("");

  const { messageApi } = useContext(ToolsContext);
  const { lang, setLang } = useContext(NavBarContext);
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  // function
  // ---------------------------------------------------------------------------

  async function onSubmit(value: any) {
    const signUpFields: SignUpFieldsType = {
      username,
      email: "",
      password,
      district,
      village,
      telephone,
      birthday,
      gender,
      fio,
      jamoat,
      fromWho,
    };

    if (districtOtherVisible) signUpFields.district = value["other_district"];
    // if (jamoatOtherVisible) signUpFields.jamoat = value["other_jamoat"];
    // if (villageOtherVisible) signUpFields.village = value["other_village"];
    setLoading(true);

    try {
      const message = await authApi.signUp(signUpFields);

      if (messageApi) messageApi.open({ type: "success", content: message });

      navigate("/sign-in");
    } catch (err) {
      if (messageApi) messageApi.open({ type: "error", content: `${err}` });
    }
    setLoading(false);
  }

  // ---------------------------------------------------------------------------
  // styles
  // ---------------------------------------------------------------------------

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.paddingXL}px ${token.padding}px`,
      width: "380px",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center",
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  // ---------------------------------------------------------------------------
  return (
    <section style={{ ...styles.section, position: "relative" }}>
      <div style={{ position: "absolute", right: "10px", top: "10px" }}>
        {/* --------------------------------------------------------------------------- */}
        {/* LANGUAGE SELECT */}
        {/* --------------------------------------------------------------------------- */}

        <Dropdown
          menu={{
            items: [
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
            ],
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
      </div>

      <div style={styles.container}>
        <div style={{ ...styles.header, textAlign: "center" }}>
          {/* --------------------------------------------------------------------------- */}
          {/* ICON */}
          {/* --------------------------------------------------------------------------- */}

          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.125" width="32" height="32" rx="6.4" fill="#1890FF" />
            <path
              d="M19.3251 4.80005H27.3251V12.8H19.3251V4.80005Z"
              fill="white"
            />
            <path d="M12.925 12.8H19.3251V19.2H12.925V12.8Z" fill="white" />
            <path d="M4.92505 17.6H14.525V27.2001H4.92505V17.6Z" fill="white" />
          </svg>

          {/* --------------------------------------------------------------------------- */}
          {/* TITLE */}
          {/* --------------------------------------------------------------------------- */}

          <Title style={styles.title}>{language["signUp"][lang]}</Title>
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* SIGN UP FORM */}
        {/* --------------------------------------------------------------------------- */}

        <Form
          name="normal_signup"
          onFinish={onSubmit}
          layout="vertical"
          requiredMark="optional"
        >
          {/* --------------------------------------------------------------------------- */}
          {/* USERNAME */}
          {/* --------------------------------------------------------------------------- */}

          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: language["reqn"][lang],
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder={language["usr"][lang]}
            />
          </Form.Item>

          {/* --------------------------------------------------------------------------- */}
          {/* EMAIL */}
          {/* --------------------------------------------------------------------------- */}

          {/* <Form.Item name="email">
            <Input
              prefix={<MailOutlined />}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </Form.Item> */}

          {/* --------------------------------------------------------------------------- */}
          {/* PASSWORD */}
          {/* --------------------------------------------------------------------------- */}

          <Form.Item
            name="password"
            // extra="Password needs to be at least 8 characters."
            rules={[
              {
                required: true,
                message: language["reqp"][lang],
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder={language["pass"][lang]}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>

          {/* --------------------------------------------------------------------------- */}
          {/* FIO */}
          {/* --------------------------------------------------------------------------- */}

          <Form.Item
            name="fio"
            rules={[
              {
                required: true,
                message: language["reqf"][lang],
              },
            ]}
          >
            <Input
              placeholder={language["fio"][lang]}
              value={fio}
              onChange={(event) => setFio(event.target.value)}
            />
          </Form.Item>

          {/* --------------------------------------------------------------------------- */}
          {/* DISTRICT */}
          {/* --------------------------------------------------------------------------- */}

          <Form.Item
            name="district"
            rules={[{ required: true, message: language["reqd"][lang] }]}
          >
            <Select
              placeholder={language["slcD"][lang]}
              value={district}
              onChange={(event) => {
                if (event === "other") setDistrictOtherVisible(true);
                else setDistrictOtherVisible(false);
                setDistrict(event);
                setJamoat("");
                setVillage("");
              }}
            >
              {districts.map((elem) => (
                <Option key={elem.name}>
                  {elem[`label::${lang === "ENG" ? "English" : "Tajik"}`]}
                </Option>
              ))}
              <Option key="other">{language["other"][lang]}</Option>
            </Select>
          </Form.Item>

          {/* --------------------------------------------------------------------------- */}
          {/* OTHER DISTRICT */}
          {/* --------------------------------------------------------------------------- */}

          {districtOtherVisible && (
            <Form.Item
              name="other_district"
              rules={[
                {
                  required: true,
                  message: language["reqid"][lang],
                },
              ]}
            >
              <Input placeholder={language["od"][lang]} />
            </Form.Item>
          )}

          {/* --------------------------------------------------------------------------- */}
          {/* JAMOAT */}
          {/* --------------------------------------------------------------------------- */}

          {/* <Form.Item
            hidden={districtOtherVisible}
            name="jamoat"
            // rules={[{ required: true, message: "Please select jamoat!" }]}
          >
            <Select
              placeholder={language["slcJ"][lang]}
              value={jamoat}
              onChange={(event) => {
                if (event === "other") setJamoatOtherVisible(true);
                else setJamoatOtherVisible(false);
                setJamoat(event);
                setVillage("");
              }}
            >
              {data["jamoat"]
                .filter((elem) => elem.district === district)
                .map((elem) => (
                  <Option key={elem.name}>
                    {elem[`label::${lang === "ENG" ? "English" : "Tajik"}`]}
                  </Option>
                ))}
              {data["jamoat"].filter((elem) => elem.district === district)
                .length > 0 && (
                <Option key="other">{language["other"][lang]}</Option>
              )}
            </Select>
          </Form.Item>*/}

          {/* --------------------------------------------------------------------------- */}
          {/* OTHER JAMOAT */}
          {/* --------------------------------------------------------------------------- */}

          {/*  {jamoatOtherVisible && (
            <Form.Item
              name="other_jamoat"
              rules={[
                {
                  required: true,
                  message: "Please input your jamoat!",
                },
              ]}
            >
              <Input placeholder="Other Jamoat" />
            </Form.Item>
          )} */}

          {/* --------------------------------------------------------------------------- */}
          {/* VILLAGE */}
          {/* --------------------------------------------------------------------------- */}

          {/* <Form.Item
            hidden={districtOtherVisible || jamoatOtherVisible}
            name="village"
            // rules={[{ required: true, message: "Please select village!" }]}
          >
            <Select
              value={village}
              onChange={(event) => {
                if (event === "other") setVillageOtherVisible(true);
                else setVillageOtherVisible(false);
                setVillage(event);
              }}
              placeholder={language["slcV"][lang]}
            >
              {data["village"]
                .filter((elem) => elem.jamoat === jamoat)
                .map((elem) => (
                  <Option key={elem.name}>
                    {elem[`label::${lang === "ENG" ? "English" : "Tajik"}`]}
                  </Option>
                ))}
              {data["village"].filter((elem) => elem.jamoat === jamoat).length >
                0 && <Option key="other">{language["other"][lang]}</Option>}
            </Select>
          </Form.Item> */}

          {/* --------------------------------------------------------------------------- */}
          {/* OTHER VILLAGE */}
          {/* --------------------------------------------------------------------------- */}

          {/* {villageOtherVisible && (
            <Form.Item
              name="other_village"
              rules={[
                {
                  required: true,
                  message: "Please input your village!",
                },
              ]}
            >
              <Input placeholder="Other Village" />
            </Form.Item>
          )} */}

          {/* --------------------------------------------------------------------------- */}
          {/* BIRTHDAY */}
          {/* --------------------------------------------------------------------------- */}

          <Form.Item
            name="birthDay"
            rules={[{ required: true, message: language["reqb"][lang] }]}
          >
            {/* <DatePicker
              placeholder={language["slcB"][lang]}
              style={{ width: "100%" }}
              onChange={(_, dateString) => {
                setBirthday(dateString);
              }}
            /> */}

            <InputNumber
              style={{ width: "100%" }}
              placeholder={language["userBr"][lang]}
              type="number"
              value={birthday}
              onChange={(elem) => {
                if (elem && elem >= 1900 && elem <= 2023) setBirthday(elem);
              }}
              min={1900}
              max={2023}
            />
          </Form.Item>

          {/* --------------------------------------------------------------------------- */}
          {/* TELEPHONE */}
          {/* --------------------------------------------------------------------------- */}

          <Form.Item
            name="telephone"
            rules={[
              {
                required: true,
                message: language["reqt"][lang],
              },
            ]}
          >
            <Input
              placeholder={language["tlp"][lang]}
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
            />
          </Form.Item>

          {/* --------------------------------------------------------------------------- */}
          {/* GENDER */}
          {/* --------------------------------------------------------------------------- */}

          <Form.Item
            name="gender"
            rules={[{ required: true, message: language["reqg"][lang] }]}
          >
            <Select
              placeholder={language["slcG"][lang]}
              value={gender}
              onChange={(event) => setGender(event)}
            >
              <Option value="male">{language["male"][lang]}</Option>
              <Option value="female">{language["female"][lang]}</Option>
            </Select>
          </Form.Item>

          {/* --------------------------------------------------------------------------- */}
          {/* FROM WHO ? */}
          {/* --------------------------------------------------------------------------- */}

          <Form.Item name="fromWho">
            <Input
              value={fromWho}
              onChange={(event) => setFromWho(event.target.value)}
              placeholder={language["lastField"][lang]}
            />
          </Form.Item>

          {/* --------------------------------------------------------------------------- */}
          {/* ACTIONS */}
          {/* --------------------------------------------------------------------------- */}

          <Form.Item style={{ marginBottom: "0px" }}>
            {/* --------------------------------------------------------------------------- */}
            {/* SIGN UP BUTTON */}
            {/* --------------------------------------------------------------------------- */}

            <Button
              block
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              {language["signUp"][lang]}
            </Button>

            <div style={{ ...styles.signup, textAlign: "center" }}>
              <Text style={styles.text}>{language["lass"][lang]}</Text>

              {/* --------------------------------------------------------------------------- */}
              {/* SIGN IN LINK */}
              {/* --------------------------------------------------------------------------- */}

              <Link href="" onClick={() => navigate("/sign-in")}>
                {language["signIn"][lang]}
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};
