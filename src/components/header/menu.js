import React from 'react';
import './menu.css'
const Menu=({changeFilter, changePage, filter})=>{

    return(
        <div>
            <div className='allDiv'>
                <div className='divText' onClick={() => { changePage("") }}>
                    <h2>Courses</h2>
                </div>
                <div className='divNav'>
                    <nav>
                        <li>
                            <a className={filter === "popular" && "active-item"} onClick={()=>changeFilter('popular')}   href="#">Popular</a>
                        </li>
                        <li>
                            <a className={filter === "favorite" && "active-item"} onClick={()=>changeFilter('favorite')}   href="#">Favorite</a>
                        </li>
                        <li>
                            <a className={filter === "new" && "active-item"} onClick={()=>changeFilter('new')}   href="#">New</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Menu