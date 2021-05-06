import React from 'react'
import './Home.css'
import DemoProduct from '../../DemoProduct/DemoProduct'
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="home_container">

               <Link to="/products">
            <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/SuperSale_Herotator_1st-3rdMar/Rev_FST_GW_PC_BUNK_1500x600._CB655793405_.jpg" alt="" srcset=""/>
            </Link>
            

            <div className="home_row">
                <DemoProduct 
                id={1}
                title="Hot Deals 🔥🔥 " 
                price={349}
                    image="https://rukminim1.flixcart.com/image/800/960/kjiwfbk0-0/t-shirt/e/k/s/m-t305-as10yldnwh-seven-rocks-original-imafz2qfvx7tznnn.jpeg?q=50"
                    rating={5} />


                <DemoProduct 
                id={2}
                title="Hot Deals 🔥🔥 " 
                price={259}
                    image="https://rukminim1.flixcart.com/image/495/594/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50"
                    rating={5} />
                
            </div>

            <div className="home_row">
            <DemoProduct 
            id={3}
                title="Hot Deals 🔥🔥 " 
                price={700}
                    image="https://rukminim1.flixcart.com/image/495/594/kmkxbww0/t-shirt/z/m/x/m-517co-french-connection-original-imagfg5shhwy94ww.jpeg?q=50"
                    rating={5} />

                <DemoProduct 
                id={4}
                title="Hot Deals 🔥🔥 " 
                price={349}
                    image="https://rukminim1.flixcart.com/image/800/960/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=50"
                    rating={5} />

                <DemoProduct 
                id={5}
                title="Hot Deals 🔥🔥 " 
                price={247}
                    image="https://rukminim1.flixcart.com/image/800/960/jjolt3k0/t-shirt/d/y/g/m-m7ss18tee066i-metronaut-original-imaf77evd4yxvfcg.jpeg?q=50"
                    rating={5} />
            </div>

            <div className="home_row">
            <DemoProduct 
            id={6}
                title="Hot Deals 🔥🔥 " 
                price={403}
                    image="https://rukminim1.flixcart.com/image/495/594/kjuby4w0/t-shirt/2/v/a/3xl-t2-seven-rocks-original-imafzbptgchwstcx.jpeg?q=50"
                    rating={5} />
            </div>
            </div>
        </div>
    )
}

export default Home
