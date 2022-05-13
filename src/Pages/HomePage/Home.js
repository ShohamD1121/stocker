import React,{Fragment} from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour, homeObjFive } from './Data';
import Properties from '../../Components/Properties/Properties';

const Home = () => {
  return (
    <Fragment>
        <InfoSection {...homeObjOne}/>
        <Properties {...homeObjFive}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
    </Fragment>
  )
}

export default Home;