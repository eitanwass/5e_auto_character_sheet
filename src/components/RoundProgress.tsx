import React from "react";
import _ from "lodash";
import { Typography, Box, CircularProgressProps, CircularProgress } from "@material-ui/core";


const RoundProgress = ({ current, max, props }: {current: number, max: number, props?: CircularProgressProps}): JSX.Element => {
	const mainCircleValue = current / max * 100;
	const secondaryCircleValue = mainCircleValue - 100;

	return (
		<Box position="relative" display="inline-flex">
			<CircularProgress color={"secondary"} variant={"static"} value={_.clamp(secondaryCircleValue, 0, 100)} 
				size={"6rem"} thickness={6} style={{ position: "absolute" }} {...props} />
			<CircularProgress variant={"static"} value={_.clamp(mainCircleValue, 0, 100)} 
				size={"6rem"} thickness={4} {...props} />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography variant="h5" component="div" color="textSecondary">{`${current}/${max}`}</Typography>
			</Box>
		</Box>
	);
};

export default RoundProgress;