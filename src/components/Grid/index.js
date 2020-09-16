import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../MediaCard';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const CenteredGrid = props => {
    const classes = useStyles();
    const { data } = props;
    const [bulkData, setBulkData] = useState([]);
    const [currentAmount, setCurrentAmount] = useState(0);
    const [stillGotNotes, setNotes] = useState(true);

    useEffect(() => {
        setBulkData([...data.slice(2, 30)]);
        setCurrentAmount(30);
    }, []);

    window.onscroll = function (ev) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight * 0.9) {
            handleLoadMore();
        }
    };

    console.log('bulkdata: ', bulkData, 'amount: ', currentAmount);

    const handleLoadMore = () => {
        console.log(data.length, ' ', currentAmount);
        setCurrentAmount(currentAmount + 32);
        const count = [...data.slice(2, currentAmount)];
        setBulkData(count);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MediaCard content={data[0]} />
                </Grid>
                <Grid item xs={6}>
                    <MediaCard content={data[1]} />
                </Grid>
                <Grid item xs={6}>
                    <MediaCard content={data[2]} />
                </Grid>
                {bulkData.map(el =>
                    <Grid item xs={3}>
                        <MediaCard content={el} />
                    </Grid>)
                }
            </Grid>
        </div>
    );
}

export default CenteredGrid