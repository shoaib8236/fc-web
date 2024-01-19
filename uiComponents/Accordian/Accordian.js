import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Accordian = ({ header, content }) => {
  return (
    <>
      <div className="Accordian">
        <Collapse defaultActiveKey={["1"]} expandIconPosition="right">
          <Panel header={header} key="1">
            <p>{content}</p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default React.memo(Accordian);
