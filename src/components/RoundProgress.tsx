import _ from 'lodash';
import {Typography, Box, CircularProgressProps, CircularProgress, makeStyles} from '@material-ui/core';

// const useStyles = makeStyles(
    // {
    // }
// );

const RoundProgress = ({current, max, props}: {current: number, max: number, props?: CircularProgressProps}) => {
    // const classes = useStyles();
    const mainCircleValue = current / max * 100;
    const secondaryCircleValue = mainCircleValue - 100

    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant={"static"} value={_.clamp(mainCircleValue, 0, 100)} size={"9rem"} {...props} />
        <CircularProgress color={"secondary"} variant={"static"} value={_.clamp(secondaryCircleValue, 0, 100)} size={"9rem"} style={{position: "absolute"}} {...props} />
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

  export default RoundProgress