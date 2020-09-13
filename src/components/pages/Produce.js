import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Produce extends Component {
    render() {
        return (
<<<<<<< HEAD:src/components/pages/Produce.js
            <div>
                <h1> Welcome to the Produce!!!</h1>
=======
            <div className="content hm-pg">
                <section className="pg-img">
                    Image!!!
                </section>
                <div className="intro">
                    <span>
                        Be Part Of The revolution Off food security
                    </span>
                    <button>
                        <Link to="/user">
                            Join Us
                        </Link>
                    </button>
                </div>
>>>>>>> 99d80b34fc68b93a1b71ffc59865978ee654ddfd:src/component/pages/Home.js
            </div>
        );
    }
}

export default Produce;