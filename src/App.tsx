import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { HomePage, GroupPage, ListPage } from "./pages";
import { TabPanel, Header } from "./components";
import { HomeSvg, GroupSvg, ListSvg } from "./assets/svg";
import { FilterContextProvider, contextValue } from "./context/FiltersContext";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  scrollable: {
    backgroundColor: "red",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function App() {
  const [defaultContent, setDefaultContetnt] = useState(
    contextValue.defaultContent
  );
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  function filterCtx(e: number) {
    contextValue.filter(e, (data: Array<any>) => {
      setDefaultContetnt([...data]);
    });
  }

  return (
    <FilterContextProvider
      value={{
        defaultContent: defaultContent,
        filter: (e: number) => filterCtx(e),
      }}
    >
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            icon={<HomeSvg fill={value === 0 ? "#8964D7" : "#E1AA98"} />}
            {...a11yProps(0)}
          />
          <Tab
            icon={<ListSvg fill={value === 1 ? "#8964D7" : "#E1AA98"} />}
            {...a11yProps(1)}
          />
          <Tab
            icon={<GroupSvg fill={value === 2 ? "#8964D7" : "#E1AA98"} />}
            {...a11yProps(2)}
          />
        </Tabs>
        <div className="section-body">
          <Header />
          <div>
            <TabPanel value={value} index={0}>
              <HomePage />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ListPage />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <GroupPage />
            </TabPanel>
          </div>
        </div>
      </div>
    </FilterContextProvider>
  );
}
