import React from "react";
import './Home.css';
// import { Link } from 'react-router-dom';
import mob from '../Assets/mobile.png';
import pic from '../Assets/cc.png';
import tsi from '../Assets/tsi.png';
import kuu from '../Assets/kuu.png';

// import first from '../Assets/first.png';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'react-bootstrap';

function Home()
{
return(
<div className="all">
    <div className="firstDiv">
        <div className="firstDivNav">
        <h5 className="firstDiv1">What we believe</h5>
        <h5 className="firstDiv1">Our features</h5>
    {/* ################3 */}
    <div className="storyDiv">
    <h5 className="firstDiv1">Our Story</h5>
    </div>

    {/* ################3 */}

    <div className="waitlist">
    <h5>WaitList</h5>
</div> 
</div>

   {/* ################3 */}
 

 <div className="fluidAI">
    <h1>Fluid AI</h1>
 </div>
    
</div>

<div className="boxDiv">
<div className="box1">
<img src={mob} alt="Logo" id="logo"  width={200} height={250} />
</div>

<div className="box2">
<h2>Car Insurance</h2>
</div>

<div className="box3">
<h2>Upcoming Events</h2>
<p>10:00 - 14:00</p>
</div>

<div className="box4">
    <p>Next To-Do</p>
<h2>Renew Car</h2>
</div>

<div className="box5">
    <p>Upcoming Events</p>
<h2>Kite Beach</h2>
<p>4 oct 20:00</p>
</div>


<div className="box6">
<h4>Cafe Nearby</h4>
</div>

<div className="box7">
    <p>Emirates Airplane</p>
<h2>DXB-----CDG</h2>
</div>

<div className="box8">
<img src={kuu} alt="Logo" id="logo"  width={190} height={190} />

</div>

<div className="box9">
<h3>Book a Flight </h3>
</div>


<div className="box10">
<h3>Trip Ideas</h3>
</div>


<div className="box11">
    <h1>Fluid Al</h1>
    <h2>Unlock Seamless Efficiency</h2>
    <button>Join Waitlist</button>
</div> 

</div>



<div className="allRow">
<div className="fluidAIpart">
<h5>Our features</h5>
<h3>Fluid AI was born out of a <br/>
    desire to simplify and<br/>
     streamline modern life
</h3>
</div>

<div className="row">
    <div className="rowA">
<h2>Fluid AI: Simplify, Organize, <br/>
and Acheive More
</h2>
<p>
In a world where daily tasks, communication,and<br/>
goals often become overwhelming, Fluid AI offers <br/>
an innovative solution.Combining advanced AI <br/>
technology with a user-friendly interface,it brings<br/>
together to-do lists, chats, saved items,and bucket <br/>
lists into one seamless platform.
</p>
    </div>

    <div className="rowB">
        
        <img src={mob} alt="Logo" id="logo"  width={150} height={250} />

        
        </div>
    
</div>

{/* ######################### */}


<div className="row1">

<div className="row1A">
<img src={mob} alt="Logo" id="logo"  width={150} height={250} />

        </div>

    <div className="row1B">
<h2>Fluid AI: Simplify, Organize, <br/>
and Acheive More
</h2>
<p>
In a world where daily tasks, communication,and<br/>
goals often become overwhelming, Fluid AI offers <br/>
an innovative solution.Combining advanced AI <br/>
technology with a user-friendly interface,it brings<br/>
together to-do lists, chats, saved items,and bucket <br/>
lists into one seamless platform.
</p>
</div>  
</div>




<div className="row2">


    <div className="row2A">
<h2>Fluid AI: Simplify, Organize, <br/>
and Acheive More
</h2>
<p>
In a world where daily tasks, communication,and<br/>
goals often become overwhelming, Fluid AI offers <br/>
an innovative solution.Combining advanced AI <br/>
technology with a user-friendly interface,it brings<br/>
together to-do lists, chats, saved items,and bucket <br/>
lists into one seamless platform.
</p>
</div>

<div className="row2B">
<img src={mob} alt="Logo" id="logo"  width={150} height={250} />
</div>

    
</div>


<div className="row3">
<div className="row3A">
<img src={mob} alt="Logo" id="logo"  width={150} height={250} />
</div>

    <div className="row3B">
<h2>Fluid AI: Simplify, Organize, <br/>
and Acheive More
</h2>
<p>
In a world where daily tasks, communication,and<br/>
goals often become overwhelming, Fluid AI offers <br/>
an innovative solution.Combining advanced AI <br/>
technology with a user-friendly interface,it brings<br/>
together to-do lists, chats, saved items,and bucket <br/>
lists into one seamless platform.
</p>
</div>  

</div>

<div className="afterImage">
    <div className="afterImageA">
    <h1>What can curiosity,<br/>
            wonder, and awe do for you?<br/>
            </h1>
            <p>
        Research shows that experiencing curiosity and<br/>
        awe can immensely benefit our mental, physical,<br/>
        and professional health. Here’s a brief overview <br/>
        of what curiosity and awe can do for you.

            </p>
    </div>
    <div className="afterImageB">
Does Fluid AI increase wellbeing and meaning in life?<br/>
What can curiosity, wonder, and awe do for you?<br/>
Does Fluid AI increase wellbeing and meaning in life?<br/>
What can curiosity, wonder, and awe do for you?<br/>
Does Fluid AI increase wellbeing and meaning in life?<br/>
What can curiosity, wonder, and awe do for you?<br/>
Does Fluid AI increase wellbeing and meaning in life?<br/>
What can curiosity, wonder, and awe do for you?<br/>
    </div>
</div>


<div className="join">
    <div className="joinA">
<h2>Join the Fluid AI<br/>
    Waitlist Today!
</h2>
<input type="text"  placeholder="Name"/><br/>
<input type="text" name="" id="" placeholder="Email" /><br/>
<input type="country" /><br/>
<button> Join Waitlist</button>
    </div>

    <div className="joinB">
    <img src={pic} alt="Logo" id="logo"  width={550} height={300} />
    </div>
</div>


<div className="last">
    <div className="lastA">
        <h2>Fluid AI</h2>
        <h6>2024 Fluid AI</h6>
    </div>

    <div className="lastB">
        <h5>
Our Features<br/>
Areas<br/>
FAQs<br/>
The Waitlist<br/>
Contact us
        </h5>
    

    <div className="lastC">
        <h5>
        Terms of Service<br/>
        Privacy Policy<br/>
        </h5>
    </div>
    </div>
</div>
</div>

<div className="carousel">
  {/* <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={first}
        alt="First slide"
        style={{ height: '300px', width: '50%' }}
      />
    </Carousel.Item> */}

    {/* <Carousel.Item>
      <img
        className="d-block w-100"
        src={first}
        alt="Second slide"
        style={{ height: '200px', width: '50%' }}
      />
    </Carousel.Item> */}

    {/* <Carousel.Item>
      <img
        className="d-block w-100"
        src={first}
        alt="Third slide"
        style={{ height: '200px', width: '50%' }}
      />
    </Carousel.Item> */}
  {/* </Carousel> */}
</div>



</div>

)
}
export default Home;


