import React from 'react';
import {Card, Grid, Paper} from "@material-ui/core";

const Attributes = () => {
    return (
        <Card>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <Paper>attribte</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>attribute skills</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <Paper>attribute</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>attribute skills</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <Paper>attribte</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>attribute skills</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <Paper>attribte</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>attribute skills</Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default Attributes;
