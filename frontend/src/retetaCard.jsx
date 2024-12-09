import pizza from './assets/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life 1.png';
import './index.css';
/*import DStele from './assets/Group 101.png';
import OStea from './assets/Group 102.png';
import TStele from './assets/Group 103.png';
import PStele from './assets/Group 104.png';*/
import { useState } from 'react';
import CStele from './assets/Group 105.png';
import { Reteta } from './PopUps';

function CardReteta() {
    const [openCard, setOpenCard] = useState(false);
    return(
        <div onClick={() => setOpenCard((prev) => !prev)}>
            <div className='flex flex-col items-center justify-center boxShadowFIX md:w-64 md:h-fit w-40 h-80 cursor-pointer bg-white z-[7]'>
                <div className='border-b-2 border-[#009C41]'>
                    <img className='unselectable object-scale-down z-[8]' src={pizza}/>
                </div>
                <div className='unselectable items-center justify-center flex flex-col p-4 gap-px'>
                    <div className='unselectable font-bold text-xl'>Reteta 1</div>
                    <img className='unselectable object-scale-down w-28 h-4' src={CStele}/>
                    <div className='unselectable'>Nr ratinguri</div>
                    <div className='unselectable'>0</div>
                    <div className='unselectable'>Author:</div>
                    <div className='unselectable'>Prenume Nume</div>
                </div>
            </div>
            {
                openCard && <Reteta />
            }
        </div>
    )
}

export default CardReteta;