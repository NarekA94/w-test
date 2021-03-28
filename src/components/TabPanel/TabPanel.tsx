import React, { Fragment, ReactElement } from "react";
import "./panel.scss";

interface TabPanelProps {
  children: ReactElement;
  value: number;
  index: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Fragment>
      <div
        className="panel"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    </Fragment>
  );
}
