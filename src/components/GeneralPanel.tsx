import React, { useState } from "react";
import { Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import CharacterPanel from "./characterPanel/CharacterPanel";


const GeneralPanel = (): JSX.Element => {
	const [currentTab, setCurrentTab] = useState<string>("0");

	return (
		<TabContext value={currentTab}>
			<TabList
				onChange={(event: React.ChangeEvent<Record<string, unknown>>, newTab: string) => setCurrentTab(newTab)}
				variant={"scrollable"}
				scrollButtons={"auto"}>
				<Tab label={"Character"} value={"0"} />
				<Tab label={"Stats"} value={"1"} />
				<Tab label={"Features"} value={"2"} />
				<Tab label={"Equipment"} value={"3"} />
				<Tab label={"Spells"} value={"4"} />
			</TabList>
			<TabPanel value={"0"}>
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
	);
};

export default GeneralPanel;
