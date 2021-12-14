import React,{useState} from 'react'
import GraphContainer1 from './GraphContainer1'
import GraphContainer2 from './GraphContainer2'
import GraphContainer3 from './GraphContainer3'
import "./home.css"
import imgPrev from "./prevbtn.png"
import imgNext from "./nextbtn.png"
export default function Home() {

    const [graphContainerCount, setGraphContainerCount] = useState(1)
 
    // console.log();
    return (
        <div className='homeContainer'>
            <div className='graphContainer'>

                {graphContainerCount===1?<GraphContainer1></GraphContainer1>:graphContainerCount===2?<GraphContainer2></GraphContainer2>:<GraphContainer3></GraphContainer3>}
            </div>
            <div className="foot">
               
               <div className="previousbtn" onClick={()=>{
                     if(graphContainerCount===1)
                     {
                         return;
                     }
                     else{
                         setGraphContainerCount(count=>count-1)
                     }
               }}>
                   <img src={imgPrev} alt="" />
               </div>

               <div className="text">{graphContainerCount}/3</div>
               <div className="nextbtn" >
                   <img src={imgNext} alt="" onClick={()=>{
                       if(graphContainerCount===3)
                       {
                           return;
                       }
                       else{
                           setGraphContainerCount(count=>count+1)
                       }
        
                   }}  />
               </div>
            </div>
        </div>
    )
}
