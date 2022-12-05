import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuLinks from '../menuLinks';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';


const SideMenu = (rockets) => {

    const [visibleLeft, setVisibleLeft] = useState(false);

return (
    <header>
    <div class="flex flex-column flex-wrap justify-content-start">
    <div class="flex flex-row">
    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-align-justify" onClick={() => setVisibleLeft(true)} className="mr-2" /></div>

   
        </div>
    </div>


    <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
            <div >
                <Link onClick={() => setVisibleLeft(false)} to="/launches">
                    PAST LAUNCHES
                </Link>
            </div>
            <MenuLinks rockets={ rockets.rockets} toggleMenu = {setVisibleLeft} />
            </Sidebar>
    </header>
)


    };

export default SideMenu;
