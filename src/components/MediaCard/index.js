import React from 'react'
import '../MediaCard/styles.css'

const MediaCard = props =>{
    if (props.content!==undefined){
        const {news_id, title, img_url, url, source_name} = props.content;

        return (
            <article key={news_id}>
                <img alt={title} src={img_url}></img>
                <h1><a href={url}>{title}</a></h1>
                <span>{source_name}</span>
            </article>
        )
    } else {
        return null
    }
}

export default MediaCard