import "./Services.scss";
import {Link} from 'react-router-dom';
import { useState } from "react";

const Services = () => {
    const [service,setService] = useState("");

    return (
        <>
            <header className="services">
                <h1>What are you looking for?</h1>
                <div className="cards">
                    <Link exact="true" to="/form" onClick={()=>setService("webdesign")}>
                        <div className="card">
                            <div className="img">
                                <img src="svg/web-design-yellow.svg" className="yellow" alt="" />
                                <img src="svg/web-design-white.svg" className="white" alt="" />
                            </div>
                            <div className="content">
                                <h3>
                                    Web Design &
                                    Development
                                </h3>
                            </div>
                        </div>
                    </Link>
                    <Link exact="true" to="/form" onClick={()=>setService("digitalmarketing")}>
                        <div className="card">
                            <div className="img">
                                <img src="svg/digital-marketing-yellow.svg" className="yellow" alt="" />
                                <img src="svg/digital-marketing-white.svg" className="white" alt="" />
                            </div>
                            <div className="content">
                                <h3>
                                    Digital Marketing
                                </h3>
                            </div>
                        </div>
                    </Link>
                    <Link exact="true" to="/form" onClick={()=>setService("digitalconsulting")}>
                        <div className="card">
                            <div className="img">
                                <img src="svg/consulting-yellow.svg" className="yellow" alt="" />
                                <img src="svg/consulting-white.svg" className="white" alt="" />

                            </div>
                            <div className="content">
                                <h3>
                                    Digital Consulting
                                </h3>
                            </div>
                        </div>
                    </Link>
                    <Link exact="true" to="/form" onClick={()=>setService("bposervice")}>
                        <div className="card">
                            <div className="img">
                                <img src="svg/customer-service-yellow.svg" className="yellow" alt="" />
                                <img src="svg/customer-service-white.svg" className="white" alt="" />
                            </div>
                            <div className="content">
                                <h3>
                                    BPO Services
                                </h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Services
// export {selectedService};