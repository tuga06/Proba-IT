import { useState } from 'react';
import DStele from './assets/Group 101.png';
import OStea from './assets/Group 102.png';
import TStele from './assets/Group 103.png';
import PStele from './assets/Group 104.png';
import CStele from './assets/Group 105.png';
import dropdownA from './assets/Group 99.png';
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

export { Filter, Sort };
