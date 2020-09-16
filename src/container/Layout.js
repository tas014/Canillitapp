import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({children}) =>{
    return (
        <div className='App'>
            <Navbar />
            <section>
               {children} 
            </section>
            <span className='noMore'>No hay más noticias que ver aqui.</span>
        </div>
    )
}

export default Layout