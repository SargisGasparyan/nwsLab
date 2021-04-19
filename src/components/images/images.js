import React from 'react'
import './images.css'
import logo4 from '../../logo/4.png'

const Images=({list})=> {
    const images = list.map((item) => {
        const {img,text1,text2,min} = item;
        return (
            <div className="divImg">
                <div className="hh">
                    <div>
                        <h3 className="hh2">{text1}</h3>
                        <h5 className="hh3">{text2}</h5>
                    </div>
                    <div>
                        <h3 className='hh4'>{min}</h3>
                    </div>
                    <div className="play">
                        <img src={logo4} alt="logo4" className='logo4' />
                    </div>
                    <img src={img} className="img"/>
                </div>
            </div>
        );
    });
        return (
            <div>
                {images}
            </div>
        )
    }
    export default Images
