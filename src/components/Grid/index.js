import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../MediaCard';

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

    useEffect(()=>{
        setBulkData([...data.slice(2,32)]);
        setCurrentAmount(32);
    },[]);

    console.log('bulkdata: ',bulkData,'amount: ', currentAmount);

    const handleLoadMore = () => {
        setCurrentAmount(currentAmount + 32);
        const count=[...data.slice(2, currentAmount)];
        setBulkData(count);
    }

    handleLoadMore();

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
            <button onClick={handleLoadMore}>Load More</button>
        </div>
    );
}

export default CenteredGrid