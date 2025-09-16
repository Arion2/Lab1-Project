import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
return (
    <div className='explore-menu'id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu filled with freshly prepared dishes, rich flavors, and something to satisfy every craving. Whether you’re in the mood for a light bite, a hearty meal, or a sweet treat, our chefs have crafted options that bring taste and quality to your table. From classic favorites to unique specialties, every choice is made to delight your senses and make your dining experience unforgettable.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}

        </div>
        <hr />
    </div>
)
}

export default ExploreMenu

