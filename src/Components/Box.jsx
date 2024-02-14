import {  useState } from 'react';
import './Box.css'
import ChildBox from './ChildBox';
function Box(){
    const [boxVisible , setBoxVisible] =  useState([])
    function showChildBox(){
        setBoxVisible([...boxVisible,<ChildBox/>])
    }
    return(
        <div className="Box-parent">
            <div className='child-box'>
                {boxVisible}
            </div>
           <button className="parentBox-Btn" onClick={showChildBox}>Add Box</button>         
        </div>
    );
}

export default Box