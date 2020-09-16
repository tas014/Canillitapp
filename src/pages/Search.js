import React, { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import Layout from '../container/Layout';
import MediaCard from '../components/MediaCard';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import GridSkeleton from '../components/GridSkeleton';

const Search = () =>{
    let {query} = useParams();
    const [news, setNews]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchData = async() =>{
            try {
                const response = await axios.get(`https://api.canillitapp.com/search/${query}`);
                console.log(response.data);
                const data = response.data;
                setLoading(false);
                setNews(data);
            } catch (error) {
                console.error('este es mi error',error);
            }
        }
        fetchData();
    },[])

    return(
        <Layout>
            {!loading ? <Grid container spacing={3}>
                {news.map(el => <Grid item xs={3}><MediaCard content={el} /></Grid>)}
            </Grid> : <GridSkeleton type={false} />}
        </Layout>
    )
}

export default Search