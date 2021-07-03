import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";


const GeneralPanel = (): JSX.Element => {
	const [currentTab, setCurrentTab] = useState<number>(0);

	return (
		<Tabs
			value={currentTab}
			onChange={(event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => setCurrentTab(newValue)}
			variant={"scrollable"}
			scrollButtons={"auto"}
			centered>
			<Tab label={"Character"}/>
			<Tab label={"Stats"}/>
			<Tab label={"Features"}/>
			<Tab label={"Equipment"}/>
			<Tab label={"Spells"}/>
		</Tabs>
	);
};

export default GeneralPanel;
