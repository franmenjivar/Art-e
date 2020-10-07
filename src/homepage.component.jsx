import React from 'react';
import App from './App';
import './homepage.styles.scss'

const HomePage=()=>(
    <div class="homepage">
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Books</h1>
                    <span className='subtitle'> Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Paintings</h1>
                    <span className='subtitle'> Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Handcrafts</h1>
                    <span className='subtitle'> Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Sculpture</h1>
                    <span className='subtitle'> Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Clothing</h1>
                    <span className='subtitle'> Shop Now</span>
                </div>
            </div>

        </div>


    </div>
)


export default HomePage;