import React, {useEffect,useState} from 'react';
import Layout from '../container/Layout';
import CenteredGrid from '../components/Grid'
import axios from 'axios'
import GridSkeleton from '../components/GridSkeleton';
import dayjs from 'dayjs'
import 'dayjs/locale/es'

const Home = () =>{
    const [news, setNews]=useState([]);
    const [loading,setLoading]=useState(true);
    const fecha = new Date();
    const diaDeHoy = dayjs(fecha).locale('es').format('YYYY-MM-DD')
    useEffect(()=>{
        const fetchData = async() =>{
            try {
                const response = await axios.get(`https://api.canillitapp.com/latest/${diaDeHoy}`);
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
            { !loading ? <CenteredGrid data={news} /> : <GridSkeleton />}
        </Layout>
    )
}

export default Home