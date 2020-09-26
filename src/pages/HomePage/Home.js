import React from 'react';
import { Grommet } from 'grommet';
import { homeObjOne } from './Data';
import { InfoSection} from '../../components';
import {Authentication} from '../../components';
import Cards from '../../components/Cards';
import '../../App.css';
import HeroSection from '../../components/HeroSection'


function Home () {
    return (
        <Grommet plain >
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Cards />
        <Authentication />
        </Grommet>
    )
}
// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> Welcome to the home page!!!</h1>
//             </div>
//         );
//     }
// }

export default Home;