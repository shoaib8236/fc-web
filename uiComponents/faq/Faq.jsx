import React, { useState, useEffect } from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
import Head from "next/head";
import Script from "next/script";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch(`https://api.foodchoo.com/api/v1/common/faqs`, {
      method: "GET",
      baseURL: "",
    })
      .then((response) => response.json())
      .then((res) => {
        setFaqs(res.data);
      })
      .catch((e) => {});
  }, []);

  return (
    <>
      <div className="i-am-faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center ">
              <h1 className="theme-title theme-title-red m-auto theme-title-max">
                FAQ'S
              </h1>
            </div>
            <div className="col-lg-8 m-auto fields-wrapper">
              <Collapse expandIconPosition={"right"} className="faq-collapse">
                {faqs.map((faq) => (
                  <Panel header={faq.question} key={faq._id}>
                    <div>{faq.answer}</div>
                  </Panel>
                ))}
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(faq);
