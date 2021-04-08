import React from 'react';
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjFour, homeObjThree,homeObjTwo} from './Data'

const Home = () => {

return (
<>
<HeroSection {...homeObjOne}/>
<HeroSection {...homeObjTwo}/>
<HeroSection {...homeObjThree}/>
<HeroSection {...homeObjFour}/>


</>
)
}

export default Home