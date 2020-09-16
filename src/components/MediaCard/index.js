import React from 'react'
import '../MediaCard/styles.css'

const MediaCard = props =>{
    if (props.content!==undefined){
        const {news_id, title, img_url, url, source_name} = props.content;
        const img= img_url ? img_url : 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/06/19/rick-astley-en-su-cancion-never-gonna-give-you-up.gif' 

        return (
            <article className='artwos' key={news_id}>
                <a href={url}><img alt={title} src={img}></img></a>
                <h1><a style={{ textDecoration: 'none', color: 'whitesmoke', fontSize:20 }} href={url}>{title}</a></h1>
                <span>{source_name}</span>
            </article>
        )
    } else {
        return null
    }
}

export default MediaCard