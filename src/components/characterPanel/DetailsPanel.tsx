import React from "react";

import { Card, Grid, TextField } from "@material-ui/core";


const DetailsPanel = (): JSX.Element => (
	<>
		Details
		<Card>
			<Grid container>
				<Grid item xs={6}>
					<TextField defaultValue={""} helperText={"Name"}/>
				</Grid>
				<Grid item xs={6}>
					<TextField defaultValue={""} helperText={"Background"}/>
				</Grid>
				<Grid item xs={6}>
					<TextField defaultValue={""} helperText={"Class"}/>
				</Grid>
				<Grid item xs={6}>
					<TextField defaultValue={""} helperText={"Race"}/>
				</Grid>
			</Grid>
		</Card>
	</>
);

export default  DetailsPanel;
