import React from 'react'
import './Body.css'

const Body = () => {
  return ( 
    <div>
        <div className="workforce">
            <img src={require("../Asset/1692174516.jpg")}  className="ak1" alt="" />
          <div className="h1">  <h1>LOOKING FOR JOB?</h1></div>
             <div className="h3"><h3>1 million job are created every month</h3></div>
        </div>
      <div className="text">Why choose Meraqui?</div>
     <div className="text-img">
      <div className="image">< img  src={require("../Asset/Requirements.2d86964d.jpg")} className='picture'/>
      <div className="span"><p className="ak">1000 worker required for your new plant</p>
      <p className="ak">we can sources and deploy in jiffy through </p>
      <p className="ak"> our pan india node network on portal</p>
      </div>
      </div>
      </div>

      <div className="text">We have worked across all industries</div>
      <div className="text-imgs">
      <div className="images">< img  src={require("../Asset/sixth.2397f722.jpg")} className='pictures'/>
      
      <div className="images">< img  src={require("../Asset/Logistics.jpg")} className='pictures'/> 
      
      <div className="images">< img  src={require("../Asset/Manufacturing (1).7d7b25b6.jpg")} className='pictures'/>
      {/* <div className="images">< img  src={require("../Asset/Requirements.2d86964d.jpg")} className='pictures'/>
      </div> */}
      </div>
      </div>
      </div>
    </div>
      <div className="span-text">
      <div className="spans"><p>Telecom</p></div>
      <div className="spans"><p>Logistics</p> </div>
      <div className="spans"><p>Manufacturing</p></div>
      {/* <div className="spans"><p>IT</p></div> */}
      </div>

      <div className="icon">
      <i class=""></i>
      </div>

      <div className="text">Meraqui in news</div>
      <div className="text-img2">
        <div className="start">
      <div className="im3">< img  src={require("../Asset/1689325601.jpg")} className='picture'/>
      <p>Wass startup Meraqul Is helpin..</p>
      <p>Launched by Shalin Maheshwari and lalit Singh, Wass startup Meraqul aims to bridge th gap between organisation and worker </p>
      <div className="read">Read more</div>
      </div>
      </div>
      <div className="yourself">
      <div className="im4">< img  src={require("../Asset/1689325654.jpg")} className='picture'/>
      <p>How Technology can...</p>
      <p>Automation, digittal platforms,numerous innovation and technology advancements are all </p>
      <div className="read">Read more</div>
      </div>
      </div>

      </div>
      <div className="seeall">
      <button className="see">SEE ALL</button></div>
      </div>

  

   
    

    

  )
}

export default Body;
