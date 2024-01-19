import React from "react";
import Accordian from "../../uiComponents/Accordian/Accordian";
import PageLayout from "../../uiComponents/PageLayout/PageLayout";
import TermsAndCondition from "../../uiComponents/TermsAndCondition/TermsAndCondition";
const privacy_policy = [
  { header: "lorem ippsum dolarsit amet", description: "desctiption test" },
  { header: "lorem ippsum dolarsit amet", description: "desctiption test" },
];

const index = () => {
  return (
    <>
      <PageLayout title={"Press"}>
        <div className="i-am-term-and-condition">
          <div className="container">
            {/* {privacy_policy.map((items,index) => (
              <Accordian key={index} header={items.header} content={items.description} />
            ))} */}
            <TermsAndCondition />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default index;
