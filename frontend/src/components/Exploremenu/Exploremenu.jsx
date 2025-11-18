import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({ category, setCategory }) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore Our Menu</h1>
            <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae cum dolores hic, voluptates laboriosam deleniti labore, mollitia sapiente aliquid obcaecati iste magnam esse alias! Quasi nesciunt dolores similique. At.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div
                        onClick={() =>
                            setCategory(prev =>
                                prev === item.menu_name ? "All" : item.menu_name
                            )
                        }
                        key={item.menu_name}
                        className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}
                    >
                        <img src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>

    )
}

export default Exploremenu