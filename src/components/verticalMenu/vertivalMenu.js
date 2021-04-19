import React from 'react'
import './verticalMenu.css'
import Svg1 from '../svg/svg1'
import Svg2 from '../svg/svg2'
import Svg3 from '../svg/svg3'



const verticaMenu=({changePage, contentPage})=>{
    return(
        <div className="div1nav">
                <li onClick={()=>{changePage('page1')}} className={contentPage === "page1" && 'active-item'}>
                    <Svg1/> 
                </li> 
                <li onClick={()=>{changePage('page2')}} className={contentPage === "page2" && 'active-item'}>
                    <Svg2/>
                </li>
                <li onClick={()=>{changePage('page3')}} className={contentPage === "page3" && 'active-item'}>
                    <Svg3/>
                </li>
        </div>
    )
}
export default  verticaMenu










