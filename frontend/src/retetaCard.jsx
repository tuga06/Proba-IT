import pizza from './assets/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life 1.png';
import './index.css';
/*import DStele from './assets/Group 101.png';
import OStea from './assets/Group 102.png';
import TStele from './assets/Group 103.png';
import PStele from './assets/Group 104.png';*/
import CStele from './assets/Group 105.png';

function CardReteta() {

    return(
        <div className='flex flex-col items-center justify-center boxShadowFIX md:w-64 md:h-fit w-40 h-80 cursor-pointer bg-white'>
            <div className='border-b-2 border-[#009C41]'>
                <img className='object-scale-down' src={pizza}/>
            </div>
            <div className='items-center justify-center flex flex-col p-4 gap-px'>
                <div className='font-bold text-xl'>Reteta 1</div>
                <img className='object-scale-down w-28 h-4' src={CStele}/>
                <div>Nr ratinguri</div>
                <div>0</div>
                <div>Author:</div>
                <div>Prenume Nume</div>
            </div>
        </div>
    )
}

export default CardReteta;