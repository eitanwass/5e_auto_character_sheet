import React, { useState, ChangeEvent } from "react";
import { makeStyles, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import CharacterPanel from "./characterPanel/CharacterPanel";


const useStyles = makeStyles({
	scrollBar: {
		"&::-webkit-scrollbar": {
			width: "0.3em"
		},
		"&::-webkit-scrollbar-track": {
			"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "DimGrey",
			outline: "1px solid DimGrey"
		}
	}
});


const GeneralPanel = (): JSX.Element => {
	const [currentTab, setCurrentTab] = useState<string>("0");
	const { scrollBar } = useStyles();

	return (
		<div>
			<TabContext value={currentTab}>
				<TabList
					onChange={(event: ChangeEvent<Record<string, unknown>>, newTab: string) => setCurrentTab(newTab)}
					variant={"scrollable"}
					scrollButtons={"auto"}
					style={{ height: "5vh" }}>
					<Tab label={"Character"} value={"0"}/>
					<Tab label={"Stats"} value={"1"}/>
					<Tab label={"Features"} value={"2"}/>
					<Tab label={"Equipment"} value={"3"}/>
					<Tab label={"Spells"} value={"4"}/>
				</TabList>
				<TabPanel value={"0"} className={scrollBar} style={{ overflow: "auto", height: "85vh" }}>
					<CharacterPanel/>
				</TabPanel>
				<TabPanel value={"1"}>
					Tab 1
				</TabPanel>
				<TabPanel value={"2"}>
					Tab 2
				</TabPanel>
				<TabPanel value={"3"}>
					Tab 3
				</TabPanel>
				<TabPanel value={"4"}>
					Tab 4
				</TabPanel>
			</TabContext>
		</div>
	);
};

export default GeneralPanel;
