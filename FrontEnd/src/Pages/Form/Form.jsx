import { useEffect, useState } from 'react';
import './Form.scss';
import axios from 'axios';

const Form = () => {
    const [industry, setIndustry] = useState("Fast Food");
    const [serviceType, setServiceType] = useState("webdevelopment");
    const [company, setCompany] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    let submitcard = useState();
    let submitContainer = useState();

    const submitCont = () => {
        submitcard.style.transform = "translateY(-300%)";
        setTimeout(() => {
            submitContainer.style.display = "none";
        }, 1001);
    };

    const getoptions = () => {

        var values = ["Fast Food", "Fashion", "E - Commerce", "Tech", "School", "automobile", "start up", "manufacturing", "home loans", "showroom", "other"];

        var select = document.getElementById("industry");

        for (const val of values) {
            var option = document.createElement("option");
            option.value = val;
            option.text = val[0].toUpperCase() + val.slice(1);
            select.appendChild(option);
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();
        submitContainer.style.display = "flex";
        setTimeout(() => {
            submitcard.style.transform = "translateY(0%)";
        }, 100);

        try {
            const res = await axios.post("/sendmsg", {
                industry,
                serviceType,
                company,
                fullname,
                email,
                mobile
            })

            setIndustry("");
            setServiceType("");
            setCompany("");
            setFullname("");
            setEmail("");
            setMobile("");

        } catch (e) {
            alert("Soory, Your Msg sending has been failed");
        }
    };


    useEffect(() => {
        submitContainer = document.getElementById("submitContainer");
        submitcard = document.getElementById("submitcard");
        getoptions();
    }, [submitForm]);


    return (
        <>
            <header className="formMainContainer">
                <div className="content">
                    <h2>
                        Get a Free Quote
                    </h2>
                    <h5>
                        We make innovative web apps, mobile apps, portals and SaaS
                    </h5>
                    <p>
                        Tell us about your needs and we will get back to you with a quote within one day.
                    </p>
                </div>
                <div className="form">
                    <div className="card">
                        <h3>
                            FILL OUT THE BELOW FORM
                        </h3>
                        <form method="post" onSubmit={submitForm}>
                            <select required placeholder="Industry" id="industry" value={industry} onChange={(e) => setIndustry(e.target.value)}>
                            </select>
                            <select required name="serviceType" placeholder="Service" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                                <option value="webdevelopment">
                                    Web Design & Development
                                </option>
                                <option value="digitalmarketing">
                                    Digital Marketing
                                </option>
                                <option value="digitalconsulting">
                                    Digital Consulting
                                </option>
                                <option value="bposervice">
                                    BPO Services
                                </option>
                            </select>
                            <input required type="text" name="company" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                            <input required type="text" name="fullname" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                            <input required type="email" name="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input required type="text" name="mobile-number" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            <input id="submit" type="submit" />
                        </form>
                    </div>
                </div>
            </header>
            <div onClick={submitCont} className="submitContainer" id="submitContainer">
                <div className="submitCard" id="submitcard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="89.73" height="56.08" viewBox="0 0 89.73 56.08">
                        <g id="hand-shake" transform="translate(0 -96.004)">
                            <g id="Group_85" data-name="Group 85" transform="translate(13.081 99.974)">
                                <g id="Group_84" data-name="Group 84" transform="translate(0 0)">
                                    <path id="Path_28" data-name="Path 28"
                                        d="M132.41,153.14c-1.761-3.671-8.061-8.767-14.147-13.691-3.395-2.744-6.6-5.339-8.648-7.384a1.869,1.869,0,0,0-1.955-.437c-1.26.456-2.038.808-2.651,1.08a6.182,6.182,0,0,1-2.509.688,1.869,1.869,0,0,0-1.368.819c-2.643,3.952-5.38,3.615-7.208,3-.583-.194-.688-.445-.744-.684-.393-1.641,1.578-5.462,4.131-8.016,6.076-6.079,9.209-7.6,15.826-4.644,7.507,3.357,15.03,5.986,15.1,6.012a1.871,1.871,0,0,0,1.23-3.533c-.075-.026-7.448-2.6-14.805-5.9-8.573-3.832-13.276-1.309-19.995,5.414-2.557,2.557-6.031,7.732-5.133,11.527a4.624,4.624,0,0,0,3.212,3.369c4.236,1.4,8.1.06,10.981-3.761a9.437,9.437,0,0,0,2.808-.89c.351-.157.763-.34,1.309-.561,2.139,2.008,5.025,4.344,8.064,6.8,5.5,4.445,11.728,9.485,13.131,12.4a2.19,2.19,0,0,1-.557,2.808,2.06,2.06,0,0,1-2.3.452,1.869,1.869,0,0,0-2.92,1.738,2.258,2.258,0,0,1-1.432,2.1,2.869,2.869,0,0,1-2.913.067,1.869,1.869,0,0,0-3.137,1.193,3.552,3.552,0,0,1-2.206,2.864,1.971,1.971,0,0,1-2.146-.333,1.891,1.891,0,0,0-1.709-.434,1.867,1.867,0,0,0-1.312,1.178c-.071.187-.232.636-1.982.636a10.765,10.765,0,0,1-4.58-1.567c-1.312-.864-9.541-7-16.649-12.955-1-.841-2.726-2.643-4.251-4.236-1.353-1.413-2.591-2.7-3.227-3.234a1.87,1.87,0,0,0-2.415,2.856c.58.49,1.7,1.675,2.939,2.965,1.668,1.742,3.391,3.544,4.55,4.516,6.962,5.829,15.329,12.121,17,13.216a14.342,14.342,0,0,0,6.636,2.176,6.434,6.434,0,0,0,4.243-1.249,5.819,5.819,0,0,0,4.251-.045,7.364,7.364,0,0,0,3.892-3.593,7.229,7.229,0,0,0,4.692-.677,6.343,6.343,0,0,0,3.122-3.26,6.114,6.114,0,0,0,4.288-1.537A5.943,5.943,0,0,0,132.41,153.14Z"
                                        transform="translate(-74.642 -118.658)" fill="#fce130" />
                                </g>
                            </g>
                            <g id="Group_87" data-name="Group 87" transform="translate(18.694 103.48)">
                                <g id="Group_86" data-name="Group 86">
                                    <path id="Path_29" data-name="Path 29"
                                        d="M125.36,138.663H108.535a1.869,1.869,0,1,0,0,3.739H125.36a1.869,1.869,0,0,0,0-3.739Z"
                                        transform="translate(-106.666 -138.663)" fill="#fce130" />
                                </g>
                            </g>
                            <g id="Group_89" data-name="Group 89" transform="translate(67.439 129.648)">
                                <g id="Group_88" data-name="Group 88" transform="translate(0 0)">
                                    <path id="Path_30" data-name="Path 30"
                                        d="M393.7,288.807a1.865,1.865,0,0,0-2.595-.508l-5.466,3.671a1.87,1.87,0,0,0,2.086,3.1l5.466-3.671A1.871,1.871,0,0,0,393.7,288.807Z"
                                        transform="translate(-384.811 -287.977)" fill="#fce130" />
                                </g>
                            </g>
                            <g id="Group_91" data-name="Group 91" transform="translate(50.476 127.779)">
                                <g id="Group_90" data-name="Group 90" transform="translate(0 0)">
                                    <path id="Path_31" data-name="Path 31"
                                        d="M302.261,288.936c-1.338-1.054-7.324-7.182-11.026-11.04a1.87,1.87,0,1,0-2.7,2.587c.961,1,9.436,9.837,11.407,11.392a1.862,1.862,0,0,0,1.155.4,1.889,1.889,0,0,0,1.473-.714A1.868,1.868,0,0,0,302.261,288.936Z"
                                        transform="translate(-288.016 -277.317)" fill="#fce130" />
                                </g>
                            </g>
                            <g id="Group_93" data-name="Group 93" transform="translate(44.866 133.391)">
                                <g id="Group_92" data-name="Group 92" transform="translate(0 0)">
                                    <path id="Path_32" data-name="Path 32"
                                        d="M268.391,319.094c-2.24-1.791-7.866-7.769-9.138-9.152a1.871,1.871,0,0,0-2.756,2.531c.067.071,6.782,7.32,9.556,9.541a1.87,1.87,0,0,0,2.337-2.92Z"
                                        transform="translate(-256.005 -309.337)" fill="#fce130" />
                                </g>
                            </g>
                            <g id="Group_95" data-name="Group 95" transform="translate(37.389 137.125)">
                                <g id="Group_94" data-name="Group 94">
                                    <path id="Path_33" data-name="Path 33"
                                        d="M225.765,340.432c-2.666-2.247-8.121-8.053-9.186-9.194a1.87,1.87,0,0,0-2.733,2.554c1.533,1.641,6.752,7.175,9.508,9.5a1.871,1.871,0,0,0,2.411-2.86Z"
                                        transform="translate(-213.343 -330.644)" fill="#fce130" />
                                </g>
                            </g>
                            <g id="Group_97" data-name="Group 97" transform="translate(0 96.003)">
                                <g id="Group_96" data-name="Group 96" transform="translate(0 0)">
                                    <path id="Path_34" data-name="Path 34"
                                        d="M21.849,100.253c-3.2-3.036-16.017-4.019-19.868-4.247A1.868,1.868,0,0,0,0,97.872V131.52a1.87,1.87,0,0,0,1.869,1.869H13.086a1.867,1.867,0,0,0,1.776-1.29c.273-.838,6.715-20.608,7.563-30.329A1.86,1.86,0,0,0,21.849,100.253Zm-10.128,29.4H3.739V99.876c6.008.475,12.491,1.507,14.847,2.651C17.595,110.714,13.112,125.262,11.721,129.651Z"
                                        transform="translate(0 -96.003)" fill="#fce130" />
                                </g>
                            </g>
                            <g id="Group_99" data-name="Group 99" transform="translate(63.625 99.741)">
                                <g id="Group_98" data-name="Group 98">
                                    <path id="Path_35" data-name="Path 35"
                                        d="M387.281,117.33c-14.678,0-22.821,3.757-23.161,3.914a1.86,1.86,0,0,0-1,1.163,1.885,1.885,0,0,0,.206,1.518c2.311,3.72,9.545,24.38,10.936,29.42a1.869,1.869,0,0,0,1.8,1.372h11.216a1.87,1.87,0,0,0,1.869-1.869V119.2A1.868,1.868,0,0,0,387.281,117.33Zm-1.869,33.649h-7.949c-1.772-5.773-7.006-20.825-9.926-27.046a60.886,60.886,0,0,1,17.875-2.841Z"
                                        transform="translate(-363.046 -117.33)" fill="#fce130" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h3>Thanks For Submitting Your inquiry.</h3>
                    <h4>We will get back to you Shortly.</h4>
                </div>
            </div>
        </>
    )
}

export default Form
