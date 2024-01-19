import React, { useEffect, useState, useRef } from "react";
import DownloadActions from "../../uiComponents/downloadActions/DownloadActions";
import PageLayout from "../../uiComponents/PageLayout/PageLayout";
import axios from "axios";
import Router from "next/router";
import { Select, Input } from "antd";
import staric from "../../assets/images/icons/staric.png";
import SneakBar from "../../uiComponents/SneakBar/SneakBar";
import { BsEmojiSmile } from "react-icons/bs";

const { Option } = Select;
const { TextArea } = Input;

const index = (props) => {
  const [handleInput, setHandleInput] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });
  const [countries, setCountries] = useState();
  const [formData, setFormdata] = useState();
  const [isFieldsFilled, setIsFieldsFilled] = useState(false);
  const [totalCharacter, setTotalCharacter] = useState(1024);
  const [characterCount, setCharacterCount] = useState(0);
  const [sneakBar, setSneakBar] = useState(false);

  const textAreaRef = useRef(null);

  useEffect(() => {
    const isFilled =
      handleInput?.name !== "" &&
      handleInput?.email !== "" &&
      handleInput?.country !== "" &&
      handleInput?.message.length >= 16;
    setIsFieldsFilled(isFilled);
  }, [handleInput]);

  const handleTextArea = (e) => {
    const { value } = e.target;
    setCharacterCount(value.length);
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setHandleInput({
      ...handleInput,
      [name]: value,
    });
  };

  const onChange = (value) => {
    setHandleInput({
      ...handleInput,
      country: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormdata(handleInput);
    try {
    } catch (error) {
      console.log(error);
    }
    axios
      .post("https://api.foodchoo.com/api/v1/contact-us/", handleInput)
      .then((response) => {
        if (response.status === 200) {
          setSneakBar(true);
          const time = setTimeout(() => {
            Router.push("/");
          }, 3000);
        } else {
          return;
        }
      });
  };
  const getCountries = async () => {
    try {
      const countryResponse = await axios.get(
        "https://api.foodchoo.com/api/v1/admins/all-countries"
      );
      const countryData = countryResponse.data.data;
      if (countryData) {
        // add united states top of the list

        const filter = countryData.filter(
          (country) => country.name === "United States"
        );
        if (filter.length > 0) {
          countryData.unshift(filter[0]);
        }

        setCountries(countryData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const getColor = (c, t) => {
    if (c <= 16) {
      return "#bc0000";
    }
    if (c > 16 && c < t) {
      return "green";
    }
    if (c === t) {
      return "#bc0000";
    }
  };

  return (
    <>
      <PageLayout title="Contact">
        <div className="layout i-am-contact">
          <div className="container">
            <div className="download-app container flex-column-center spacingY">
              <h1 className="theme-title theme-title-red theme-title-max">
                Contact Us
              </h1>
            </div>
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="input-field">
                  <div className="d-flex label_wrapper">
                    <img
                      className="req_mark"
                      width={20}
                      src={staric.src}
                      alt=""
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <input
                    placeholder="What is your name?"
                    className="style-input"
                    type="text"
                    name="name"
                    value={handleInput.name}
                    onChange={(e) => handleFormInput(e)}
                  />
                </div>
                <div className="input-field">
                  <div className="d-flex label_wrapper">
                    <img
                      className="req_mark"
                      width={20}
                      src={staric.src}
                      alt=""
                    />
                    <label htmlFor="name">Email</label>
                  </div>
                  <input
                    placeholder="You know the deal.."
                    className="style-input"
                    type="text"
                    name="email"
                    onChange={handleFormInput}
                    value={handleInput.email}
                  />
                </div>
                <div className="input-field">
                  <div className="d-flex label_wrapper">
                    <img
                      className="req_mark"
                      width={20}
                      src={staric.src}
                      alt=""
                    />
                    <label htmlFor="name">Country</label>
                  </div>
                  {/* <input
                    type="text"
                    name="country"
                    value={handleInput.country}
                    onChange={handleFormInput}
                  /> */}
                  <Select
                    placeholder={"Choose.."}
                    showSearch
                    onChange={onChange}
                    // value={handleInput.country}
                    name={"country"}
                    // onSearch={onSearch}
                    // filterOption={(input, option) =>
                    //   option.children
                    //     ?.toLowerCase()
                    //     ?.indexOf(input.toLowerCase()) >= 0
                    // }
                    {...props}
                  >
                    {countries &&
                      countries.map((country) => (
                        <Option key={country.id} value={country.name}>
                          <span
                            style={{
                              borderBottom:
                                country?.name === "United States"
                                  ? "1px solid #c5c5c5"
                                  : "",
                            }}
                          >
                            {country?.name}
                          </span>
                        </Option>
                      ))}
                  </Select>
                </div>
                <div className="input-field">
                  <div className="d-flex label_wrapper">
                    <img
                      className="req_mark"
                      width={20}
                      src={staric.src}
                      alt=""
                    />
                    <label htmlFor="name">
                      Message{" "}
                      <span className="danger">
                        (required min. 16 Characters)
                      </span>
                    </label>
                  </div>
                  <textarea
                    ref={textAreaRef}
                    maxLength={totalCharacter}
                    placeholder="What's up?"
                    className="textarea"
                    name="message"
                    value={handleInput.message}
                    onChange={(e) => {
                      handleFormInput(e);
                      handleTextArea(e);
                    }}
                  />
                  <div className={"counter_textarea"}>
                    <span
                      style={{
                        color: getColor(characterCount, totalCharacter),
                      }}
                    >
                      {characterCount}
                    </span>{" "}
                    /<span>{totalCharacter}</span>
                  </div>
                </div>
                <div className="btn-box">
                  <button
                    disabled={!isFieldsFilled}
                    className={`${(!isFieldsFilled && "disabled_btn") || ""}`}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="download-app container flex-column-center spacingY">
              <h1 className="theme-title theme-title-red theme-title-max">
                DOWNLOAD THE APP NOW
              </h1>
            </div>
            <DownloadActions center={true} />
          </div>
        </div>
      </PageLayout>
      <SneakBar
        className={"sneakbar_press_wrapper"}
        showSneakBar={sneakBar}
        handleSneakBar={setSneakBar}
      >
        <BsEmojiSmile className="bs_smile_ico" />
        <h1>Received!</h1>
        <h1>We'll get back to you</h1>
      </SneakBar>
    </>
  );
};

export default index;
