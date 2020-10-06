import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Cards from '../components/Cards';

class Produce extends Component {

    // render() {
    //    return (
// <<<<<<< HEAD:src/pages/Produce.js
// =======
//         <div>
//                 <h1> Welcome to the Produce!!!</h1>
// >>>>>>> Nickbahson-login_reg:src/components/pages/Produce.js
//             <div className="content hm-pg">
//                 <section className="pg-img">
//                     Image!!!
//                 </section>
//                 <div className="intro">
//                     <span>
//                         Be Part Of The revolution Off food security
//                     </span>
//                     <button>
//                         <Link to="/user">
//                             Join Us
//                         </Link>
//                     </button>
//                 </div>
// <<<<<<< HEAD:src/pages/Produce.js
//             </div>
// =======
//               </div>
//         </div>
// >>>>>>> Nickbahson-login_reg:src/components/pages/Produce.js
    //   )
    // }
    render() {
        return (
            // <div className="content hm-pg">
            //     <section className="pg-img">
            //         Image!!!
            //     </section>
            //     <div className="intro">
            //         <span>
            //             Be Part Of The revolution Off food security
            //         </span>
            //         <button>
            //             <Link to="/user">
            //                 Join Us
            //             </Link>
            //         </button>
            //     </div>
            // </div>
            <Cards />
        );
    }
}

export default Produce;