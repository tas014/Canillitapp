import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({children}) =>{
    return (
        <div className='App'>
            <Navbar />
            <section>
               {children} 
            </section>
        </div>
    )
}

export default Layout