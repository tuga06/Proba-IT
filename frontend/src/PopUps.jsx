import { useState } from 'react';
import close from './assets/Frame.png';
import DStele from './assets/Group 101.png';
import OStea from './assets/Group 102.png';
import TStele from './assets/Group 103.png';
import PStele from './assets/Group 104.png';
import CStele from './assets/Group 105.png';
import dropdownA from './assets/Group 99.png';
import SLG from './assets/Star Light Gray.png';
import SG from './assets/Star.png';
import pizza from './assets/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life 1.png';
import './index.css';

function Filter() {
    const [openFilter, setOpenFilter] = useState(false);
    const DropDownRating = () => {
        return (
            <div className='flex flex-col bg-[#D9D9D9] rounded-b-lg'>
                <ul className='flex flex-col p-2'>
                    <li>
                        <div className='flex flex-row'>
                            <img className='w-4/5 object-contain' src={CStele} />
                            <div className='h-8 w-full content-center p-1'>
                                <input type="checkbox" className='appearance-none cursor-pointer checked:bg-[#00236D] border border-[#00236D] w-full h-full rounded' />
                            </div>
                        </div>
                    </li>
                    <div className='my-[1vh] w-full bg-[#808080] h-px place-self-center'/>
                    <li>
                        <div className='flex flex-row'>
                            <img className='w-4/5 object-contain' src={PStele} />
                            <div className='h-8 w-full content-center p-1'>
                                <input type="checkbox" className='appearance-none cursor-pointer checked:bg-[#00236D] border border-[#00236D] w-full h-full rounded' />
                            </div>
                        </div>
                    </li>
                    <div className='my-[1vh] w-full bg-[#808080] h-px place-self-center'/>
                    <li>
                        <div className='flex flex-row'>
                            <img className='w-4/5 object-contain' src={TStele} />
                            <div className='h-8 w-full content-center p-1'>
                                <input type="checkbox" className='appearance-none cursor-pointer checked:bg-[#00236D] border border-[#00236D] w-full h-full rounded' />
                            </div>
                        </div>
                    </li>
                    <div className='my-[1vh] w-full bg-[#808080] h-px place-self-center'/>
                    <li>
                        <div className='flex flex-row'>
                            <img className='w-4/5 object-contain' src={DStele} />
                            <div className='h-8 w-full content-center p-1'>
                                <input type="checkbox" className='appearance-none cursor-pointer checked:bg-[#00236D] border border-[#00236D] w-full h-full rounded' />
                            </div>
                        </div>
                    </li>
                    <div className='my-[1vh] w-full bg-[#808080] h-px place-self-center'/>
                    <li>
                        <div className='flex flex-row'>
                            <img className='w-4/5 object-contain' src={OStea} />
                            <div className='h-8 w-full content-center p-1'>
                                <input type="checkbox" className='appearance-none cursor-pointer checked:bg-[#00236D] border border-[#00236D] w-full h-full rounded' />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <div className='w-[10vw] h-[4vh] flex flex-col m-auto'>
            <button onClick={() => setOpenFilter((prev) => !prev)} className='unselectable rounded-lg text-[2vmin] font-bold flex flex-row gap-[4vw] place-content-center text-center align-middle boxShadowFIX'>
                Filter<img className='unselectable w-[1vw] h-[1vh] mt-[1vh]' src={dropdownA}/>
            </button>
            {
                openFilter && <DropDownRating />
            }
        </div>
    )
}

function Sort() {
    const [openSort, setOpenSort] = useState(false);
    const DropDownSort = () => {
        return(
            <div className='flex flex-col bg-[#D9D9D9] rounded-b-lg'>
                <ul className='flex flex-col p-2'>
                    <li className='cursor-pointer hover:bg-[#a6a6a6]'>
                        <div className='unselectable font-bold text-center'>Top rated</div>
                    </li>
                    <div className='my-[1vh] w-full bg-[#808080] h-px place-self-center'/>
                    <li className='cursor-pointer hover:bg-[#a6a6a6]'>
                        <div className='unselectable font-bold text-center'>Worst rated</div>
                    </li>
                    <div className='my-[1vh] w-full bg-[#808080] h-px place-self-center'/>
                    <li className='cursor-pointer hover:bg-[#a6a6a6]'>
                        <div className='unselectable font-bold text-center'>Most rated</div>
                    </li>
                    <div className='my-[1vh] w-full bg-[#808080] h-px place-self-center'/>
                    <li className='cursor-pointer hover:bg-[#a6a6a6]'>
                        <div className='unselectable font-bold text-center'>Least rated</div>
                    </li>
                </ul>
            </div>
        )
    }
    return(
        <div className='w-[10vw] h-[4vh] flex flex-col m-auto'>
            <button onClick={() => setOpenSort((prev) => !prev)} className='unselectable rounded-lg text-[2vmin] font-bold flex flex-row gap-[4vw] place-content-center text-center align-middle boxShadowFIX'>
                Sort<img className='unselectable w-[1vw] h-[1vh] mt-[1vh]' src={dropdownA}/>
            </button>
            {
                openSort && <DropDownSort />
            }
        </div>
    )
}

function RetetaDesk() {

    return(
        <div>
            <img className='py-4 px-8 right-0 cursor-pointer absolute' src={close}/>
            <div className='flex flex-col gap-[1vh] p-10'>
                <div className='flex flex-row gap-[2vw]'>
                    <div>
                        <img className='unselectable object-scale-down' src={pizza}/>
                    </div>
                    <div className='flex flex-col pt-6 gap-[1vh]'>
                        <div className='font-bold text-4xl' >Reteta1</div>
                        <img className='unselectable' src={CStele}/>
                        <div>Nr ratinguri:</div>
                        <div>0</div>
                        <div className='text-lg'>Author:</div>
                        <div className='text-2xl'>Nume Prenume</div>
                    </div>
                    <div className='flex flex-col 2xl:ml-[40vw] lg:ml-[20vw] pt-16 gap-[2vh] items-center justify-center'>
                        <div className='unselectable text-4xl'>Rate this recipe</div>
                        <div className='flex flex-row gap-[1vw]'>
                            <img className='unselectable object-scale-down' src={SG} />
                            <img className='unselectable object-scale-down' src={SG} />
                            <img className='unselectable object-scale-down' src={SG} />
                            <img className='unselectable object-scale-down' src={SG} />
                            <img className='unselectable object-scale-down' src={SLG} />
                        </div>
                        <button className='unselectable appearance-none cursor-pointer border border-[#009C41] bg-[#009C41] text-white font bold rounded-xl w-28 font-bold px-6 py-1'>Submit</button>
                    </div>
                </div>
                <div className='flex flex-col gap-[1vh]'>
                    <div className='w-full border-b-4 border-[#009C41] text-2xl py-2 px-8 text-[#009C41]'>
                        Description
                    </div>
                    <div className='px-4 whitespace-pre-line'>
                        Reteta de eclere pas cu pas este una dintre cele mai cerute retete de la voi, asa ca trebuia neaparat sa vin cu o versiune video. Nu stiu de ce, dar se pare ca eclerele va dau batai de cap sau ca va este frica de ele. Imi amintesc si acum de primele eclere pe cale le-am mancat. Eram la o petrecere, iar gazdele le faceau chiar atunci. Eram fascinata de cojile perfecte, de crema care mirosea genial si cantitatea uriasa de frisca. Imi aduc aminte ca toata petrecerea am mancat eclere si ca de atunci se numara printre deserturile mele preferate.
                        Semnat JamilaCuisine
                    </div>
                </div>
            </div>
        </div>
    )
}

function RetetaMob() {

    return(
        <div>
            
        </div>
    )
}

export { Filter, RetetaDesk, RetetaMob, Sort };

