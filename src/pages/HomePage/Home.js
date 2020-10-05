import React from 'react';
import { homeObjOne } from './Data';
import { InfoSection} from '../../components';
import Cards from '../../components/Cards';
import '../../App.css';
import HeroSection from '../../components/HeroSection'


function Home () {
    return (
        < >
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Cards />
        </>
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
