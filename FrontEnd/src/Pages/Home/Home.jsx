import { useEffect, useState } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    let [Nocontainer] = useState();
    let [cancelCard] = useState();

    useEffect(() => {
        Nocontainer = document.getElementById("Nocontainer");
        cancelCard = document.getElementById("cancelCard");        
    }, [])

    const notReach = (e) => {
        e.preventDefault();
        Nocontainer.style.display = "flex";
        setTimeout(() => {
            cancelCard.style.transform = "translateY(0)";
        }, 100);
    }

    const NocontainerRemove = () =>{
        cancelCard.style.transform = "translateY(-300%)";
        setTimeout(() => {
            Nocontainer.style.display = "none";
        }, 1001);
    }


    return (
        <>
            <header>
                <div className="left">
                    <div className="top">
                        <div className="out">
                            <div className="circular">
                                <div className="inner"></div>
                                <div className="circle">
                                    <div className="bar left">
                                        <div className="progress">

                                        </div>
                                    </div>
                                    <div className="bar right">
                                        <div className="progress">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="ractangle">
                            <h3>
                                4.66 billion
                            </h3>
                            <p>
                                Active internet users worldwide
                                Which is 59.5% of the global population.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1>
                        Want to reach out to them ?
                    </h1>
                    <div className="btns">
                        <Link exact="true" to="/services">
                            <button>
                                Yes
                            </button>
                        </Link>
                        <a id="notReach" onClick={notReach}>
                            <button>
                                No
                            </button>
                        </a>
                    </div>
                </div>
            </header>
            <div className="container" id="Nocontainer" onClick={NocontainerRemove}>
                <div className="cancelCard" id="cancelCard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" viewBox="0 0 113 113">
                        <g id="Group_7" data-name="Group 7" transform="translate(-0.5 -0.5)">
                            <path id="Path_2" data-name="Path 2"
                                d="M100.742.5H13.258A12.774,12.774,0,0,0,.5,13.258v87.484A12.774,12.774,0,0,0,13.258,113.5h87.484A12.774,12.774,0,0,0,113.5,100.742V13.258A12.774,12.774,0,0,0,100.742.5Zm1.823,100.242a1.826,1.826,0,0,1-1.823,1.823H13.258a1.826,1.826,0,0,1-1.823-1.823V13.258a1.826,1.826,0,0,1,1.823-1.823h87.484a1.826,1.826,0,0,1,1.823,1.823Z"
                                transform="translate(0 0)" fill="#fce130" />
                            <path id="Path_3" data-name="Path 3"
                                d="M19.968,7A5.469,5.469,0,0,0,14.5,12.468V47.228a5.468,5.468,0,1,0,10.935,0V12.468A5.469,5.469,0,0,0,19.968,7Zm0,50.708A5.469,5.469,0,0,0,14.5,63.176v3.969a5.468,5.468,0,1,0,10.935,0V63.176A5.469,5.469,0,0,0,19.968,57.708Z"
                                transform="translate(37.032 17.194)" fill="#fce130" />
                        </g>
                    </svg>
                    <h3>Oops!!!</h3>
                    <h4>You are missing out of
                        <span>
                            4.66B People.
                        </span>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Home
