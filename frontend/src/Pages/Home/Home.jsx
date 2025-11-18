import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import Appdownload from '../../components/Appdownload/Appdownload'


const Home = () => {
    const [category, setCategory] = useState("All")
    return (
        <>
            <div>
                <Header />
                <Exploremenu category={category} setCategory={setCategory} />
                <Fooddisplay category={category} setCategory={setCategory} />
                <Appdownload />
            </div>

        </>
    )
}

export default Home