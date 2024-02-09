import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './feed.css'
import {
    MDBBtn,
    MDBCard,
    MDBContainer,
    MDBCol,
    MDBIcon,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
    MDBRipple,
    MDBRow,
} from "mdb-react-ui-kit";
import './feed.css'
import Navvv from "./navvv";

export default function Feed() {
    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <MDBContainer className="py-51" >

            <div className="ayush">
                <Navvv pic="https://www.simplifai.ai/wp-content/uploads/2019/06/blank-profile-picture-973460_960_720.png" />
            </div>
            <div data-aos="zoom-in-up">
                <MDBRow className="gx-5 border-bottom pb-4 mb-5" data-aos="fade-left">
                    <MDBCol md="6" className="mb-467">
                        <MDBRipple
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img
                                src="https://media.gettyimages.com/id/610294300/photo/young-girl-on-cracked-concrete-in-malawi.jpg?s=612x612&w=0&k=20&c=dtqw_Dv3e_wQ1jqWA71NfoRzxgsJJcaRw7ZJ4y14IRU="
                                className="w-100999"
                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6" className="mb-467">
                        <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                            News of the day
                        </span>
                        <h4>
                            <strong>GLOBAL HUNGER CRISIS IN 2023</strong>
                        </h4>
                        <p className="text-muted">
                            The scale of the current global hunger and malnutrition crisis is enormous, with an expected 345.2 million people projected to be food insecure – more than double the number in 2020.
                            An expected 345.2 million people projected to be food insecure in 2023
                            more than double the number in 2020. This constitutes a staggering rise of 200 million people compared to pre-COVID-19 pandemic levels.
                            More than 900,000 people worldwide are fighting to survive in famine-like conditions.
                            This is ten times more than five years ago, an alarmingly rapid increase.
                            An immediate response is needed. The global community must not fail on its promise to end hunger and malnutrition by 2030.


                        </p>

                    </MDBCol>
                </MDBRow>

                <MDBRow className="gx-5 border-bottom pb-4 mb-5" >

                    <MDBCol md="6" className="mb-467">
                        <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                            News of the day
                        </span>
                        <h4>
                            <strong>
                                THE CAUSES OF HUNGER AND FAMINE
                            </strong>
                        </h4>
                        <p className="text-muted">
                            Conflict is still the biggest driver of hunger, with 70 percent of the world's hungry people living in areas afflicted
                            by war and violence. Events in Ukraine are further proof of how conflict feeds hunger – forcing people out of their homes,
                            wiping out their sources of income and wrecking countries’ economies.

                            The climate crisis is one of the leading causes of the steep rise in global hunger. Climate shocks destroy lives, crops and
                            livelihoods, and undermine people’s ability to feed themselves. Hunger will spiral out of control if the world fails to take
                            immediate climate action.

                            Global fertilizer prices have climbed even faster than food prices, which remain at a ten-year high themselves.
                            The effects of the war in Ukraine, including higher natural gas prices, have further disrupted global fertilizer production
                            and exports.
                        </p>
                    </MDBCol>
                    <MDBCol md="6" className="mb-467">
                        <MDBRipple
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbB4w-TEptJakNCCzwrh7NpMSgIGwnAahPA&usqp=CAU"
                                className="w-1009"
                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="gx-5 border-bottom pb-4 mb-5" data-aos="fade-left">
                    <MDBCol md="6" className="mb-467">
                        <MDBRipple
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img
                                src="https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.jpg?sfvrsn=4dba955c_10"
                                className="w-100999"
                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6" className="mb-467">
                        {/* <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                        News of the day
                    </span> */}
                        <h4>
                            <strong>
                                PANDEMIC YEAR MARKED BY SPIKE IN WORLD HUNGRY
                            </strong>
                        </h4>
                        <p className="text-muted">
                            There was a dramatic worsening of world hunger in 2020, the United Nations said today – much of it likely related to the fallout of COVID-19. While the pandemic’s impact has yet to be fully mapped, a multi-agency report estimates that around a tenth of the global population – up to 811 million people – were undernourished last year. The number suggests it will take a tremendous effort for the world to honour its pledge to end hunger by 2030.

                            This year’s edition ofThe State of Food Security and Nutrition in the World is the first global assessment of its kind in the pandemic era. The report is jointly published by the Food and Agriculture Organization of the United Nations (FAO), the International Fund for Agricultural Development (IFAD), the United Nations Children’s Fund (UNICEF), the UN World Food Programme (WFP) and the World Health Organization (WHO).
                        </p>

                    </MDBCol>
                </MDBRow>
                <MDBRow className="gx-lg-5" >
                    <MDBCol lg="4" md="6" className="mb-467 mb-lg-0" data-aos="flip-right">
                        <div>
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://plan-international.org/tachyon/2022/04/HungriestPlaces-Map-scaled.jpg"
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </a>
                            </MDBRipple>
                            <MDBRow className="mb-37">
                                <MDBCol col="6">
                                    <a href="" className="text-info">
                                        <MDBIcon fas icon="plane" className="me-1" />
                                        Hunger hotspots
                                    </a>
                                </MDBCol>

                            </MDBRow>
                            <a href="#!" className="text-dark">

                                <p>
                                    From the Central American Dry Corridor and Haiti, through the Sahel, Central African Republic, South Sudan and then eastwards to the Horn of Africa, Syria, Yemen and all the way to Afghanistan, conflict and climate shocks are driving millions of people to the brink of starvation.

                                    Last year, the world rallied extraordinary resources
                                    a record-breaking US$14 billion for WFP alone
                                    to tackle the unprecedented global food crisis.
                                    In countries like Somalia, which has been teetering on the brink of famine,
                                    the international community came together and managed to pull people back. But it is not sufficient
                                    to only keep people alive. We need to go further, and this can only be achieved by addressing the underlying causes of hunger.
                                </p>
                            </a>
                            <hr />
                            <a href="#!" className="text-dark">
                                <MDBRow className="mb-467 border-bottom pb-2">
                                    <MDBCol size="3">
                                        <img
                                            src="https://www.concernusa.org/wp-content/uploads/2017/10/concern-sierra-leone-lann-palm-nuts-1180x787.jpg"
                                            className="img-fluid shadow-1-strong rounded"
                                            alt="Hollywood Sign on The Hill"
                                        />
                                    </MDBCol>

                                    <MDBCol size="9">
                                        <p className="mb-2">
                                            <strong>SIERRA LEONE</strong>
                                        </p>
                                        <p>
                                            <u> 15.03.2023</u>
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </a>
                            <a href="#!" className="text-dark">
                                <MDBRow className="mb-467 border-bottom pb-2">
                                    <MDBCol size="3">
                                        <img
                                            src="https://www.concernusa.org/wp-content/uploads/2022/01/concern-liberia-mothers-group-cooking-demonstration-mary-1199x800.jpg"
                                            className="img-fluid shadow-1-strong rounded"
                                            alt="Hollywood Sign on The Hill"
                                        />
                                    </MDBCol>

                                    <MDBCol size="9">
                                        <p className="mb-2">
                                            <strong>LIBERIA</strong>
                                        </p>
                                        <p>
                                            <u> 15.03.2023</u>
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </a>
                            <a href="#!" className="text-dark">
                                <MDBRow className="mb-467 border-bottom pb-2">
                                    <MDBCol size="3">
                                        <img
                                            src="https://www.concernusa.org/wp-content/uploads/2022/09/concern-niger-covid-hunger-misola-flour-1180x885.jpg"
                                            className="img-fluid shadow-1-strong rounded"
                                            alt="Hollywood Sign on The Hill"
                                        />
                                    </MDBCol>

                                    <MDBCol size="9">
                                        <p className="mb-2">
                                            <strong>NIGER</strong>
                                        </p>
                                        <p>
                                            <u> 15.03.2023</u>
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </a>

                        </div>
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-467 mb-lg-0" data-aos="flip-right">
                        <div>
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://st2.depositphotos.com/1008768/8271/i/950/depositphotos_82711536-stock-photo-stop-hunger-sign.jpg"
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </a>
                            </MDBRipple>
                            <MDBRow className="mb-37">
                                <MDBCol col="6">
                                    <a href="" className="text-danger">
                                        <MDBIcon fas icon="chart-pie" className="me-1" />
                                        Let's Stop hunger now
                                    </a>
                                </MDBCol>

                            </MDBRow>
                            <a href="#!" className="text-dark">

                                <p>
                                    WFP’s changing lives work helps to build human capital, support governments in strengthening social protection
                                    programmes, stabilize communities in particularly precarious places, and help them to better survive sudden
                                    shocks without losing all their assets.
                                    In just four years of the Sahel Resilience Scale-up, WFP and local communities turned 158,000 hectares of
                                    barren fields in the Sahel region of five African countries into farm and grazing land. Over 2.5 million people benefited from
                                    integrated activities. Evidence shows that people are better equipped to withstand seasonal shocks and have improved access to vital
                                    natural resources like land they can work.
                                    <br></br>

                                </p>
                            </a>
                            <hr />
                            <a href="#!" className="text-dark">
                                <MDBRow className="mb-4 border-bottom pb-2">
                                    <MDBCol size="3">
                                        <img
                                            src="https://www.wfp.org/sites/default/files/styles/large/public/publication_covers/8c280d025ad33536ad26c34da0c80e38.png?itok=uIpDl3Wa"
                                            className="img-fluid shadow-1-strong rounded"
                                            alt="Hollywood Sign on The Hill"
                                        />
                                    </MDBCol>

                                    <MDBCol size="9">
                                        <p className="mb-2">
                                            <strong>War in Ukraine drives global food crisis</strong>
                                        </p>

                                    </MDBCol>
                                </MDBRow>
                            </a>
                            <a href="#!" className="text-dark">
                                <MDBRow className="mb-467 border-bottom pb-2">
                                    <MDBCol size="3">
                                        <img
                                            src="https://www.wfp.org/sites/default/files/styles/large/public/publication_covers/4dc99f9abe6e4da0880fd063eac970c1.png?itok=PDdY0Mjg"
                                            className="img-fluid shadow-1-strong rounded"
                                            alt="Hollywood Sign on The Hill"
                                        />
                                    </MDBCol>

                                    <MDBCol size="9">
                                        <p className="mb-2">
                                            <strong>WFP scales up to support the most vulnerable in Global Food Crisis</strong>
                                        </p>

                                    </MDBCol>
                                </MDBRow>
                            </a>


                        </div>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-467 mb-lg-0" data-aos="flip-right">
                        <div>
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://www.unicef.org/madagascar/sites/unicef.org.madagascar/files/styles/hero_tablet/public/L1150570.jpg?itok=cmKgGO25"
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </a>
                            </MDBRipple>
                            <MDBRow className="mb-3">
                                <MDBCol col="6">
                                    <a href="" className="text-warning">
                                        <MDBIcon fas icon="code" className="me-1" />
                                        Another year of extreme jeopardy for those struggling to feed their families
                                    </a>
                                </MDBCol>

                            </MDBRow>
                            <a href="#!" className="text-dark">

                                <p>
                                    The scale of the current global hunger and malnutrition crisis is enormous, with an expected 345.2 million people projected to be food insecure – more than double the number in 2020.

                                    An expected 345.2 million people projected to be food insecure in 2023 –
                                    more than double the number in 2020. This constitutes a staggering rise of 200 million people compared to
                                    pre-COVID-19 pandemic levels. More than 900,000 people worldwide are fighting to survive in famine-like conditions.
                                    This is ten times more than five years ago, an alarmingly rapid increase. An immediate response is needed. The global
                                    community must not fail on its promise to end hunger and malnutrition by 2030.
                                    WFP is facing multiple challenges – the number of acutely hungry people continues to increase at a pace that funding is unlikely to match, while the cost of delivering food assistance is at an all-time high because food and fuel prices have increased.

                                    Unmet needs heighten the risk of hunger and malnutrition.
                                    Unless the necessary resources are made available.
                                </p>
                            </a>
                            <hr />

                        </div>
                    </MDBCol>
                </MDBRow>
                {/* <nav aria-label="...">
                <MDBPagination circle className="mb-0 justify-content-center">
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
                            Previous
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem active>
                        <MDBPaginationLink href="#">
                            2 <span className="visually-hidden">(current)</span>
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">3</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">Next</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            </nav> */}


                <MDBRow className="gx-5 border-bottom pb-4 mb-5" data-aos="fade-left">

                    <MDBCol md="6" className="mb-467">
                        {/* <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                        News of the day
                    </span> */}
                        <h4>
                            <strong>ZERO HUNGER</strong>
                        </h4>
                        <p className="text-muted">
                            When you are in no food waste we can directly fight with hunger and your finale aim is zero hunger .By us we are serving 10,000 plates across cities per Day and we hoping to increase your force and awneers for the people to stop food waste

                            As per statistics, major amounts of food is wasted and sent to landfills major waste comes from households and with hotels and offices. Our main motto is to recuse the food waste and stop people sleeping with hunger

                            Be a fighter against the hunger we are looking for active contribution and make more food must go to the hunger people<br></br>


                        </p>

                    </MDBCol>
                    <MDBCol md="6" className="mb-467">
                        <MDBRipple
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img
                                src="https://media.licdn.com/dms/image/C4E12AQGv5qgZszWdag/article-cover_image-shrink_600_2000/0/1617978919111?e=2147483647&v=beta&t=tD5VP0pi1DuqAKpakPHbnR07jTkMAffNlwMACZBMAoY"
                                className="w-1009"
                            />
                            {/* <img
                            src="https://www.ifad.org/documents/38714174/41497304/68429.jpg/7debdd4e-4afd-82c1-0182-c0754102b35a"
                            className="w-1009"
                        />
                        <img
                            src="https://theowp.org/wp-content/uploads/2020/11/o_contents_995.jpg"
                            className="w-1009"
                        /> */}
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="gx-5 border-bottom pb-4 mb-5" data-aos="fade-right">
                    <MDBCol md="6" className="mb-467">
                        <MDBRipple
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img
                                src="https://images.newscientist.com/wp-content/uploads/2017/09/15104615/gettyimages-621211804.jpg?width=800"
                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6" className="mb-467" >
                        {/* <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                        News of the day
                    </span> */}
                        <h4>
                            <strong>FOOD WASTAGE</strong>
                        </h4>
                        <p className="text-muted">
                            As of 2020, 67 Millions of food are wasted in which is valued at 92,000 crores and the food is sent to landfills , we come here to control the waste of food and help the people to fight against hunger.

                            For every marriages and function around 100 plates to 150 plates of food are wasted .so In that situation please make a call for us, we will come to your place and check the quality of food and we will pack them into packets transport them through the van to the identified hunger spots and old ages home and people and roads we distribute them with love.

                            We check the quality of food and pack them into packets and within 3 to 4 we will distribute them to the people .we have a kitchen in the Chennai we cook the food and serve the needy



                            Our main motto is to “ feed people Not landfills “ . A major percentage of excess food is going to Trash and landfills, we are trying to stop this situation and control food waste.




                        </p>

                    </MDBCol>
                </MDBRow>
                <MDBRow className="gx-lg-5" data-aos="fade-up">
                    <MDBCol lg="4" md="6" className="mb-467 mb-lg-0">
                        <div>
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://media.nature.com/lw767/magazine-assets/d41586-022-01076-5/d41586-022-01076-5_20326466.jpg"
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </a>
                            </MDBRipple>
                            <MDBRow className="mb-37">
                                <MDBCol col="6">
                                    <a href="" className="text-info">
                                        <MDBIcon fas icon="plane" className="me-1" />
                                        <u> Other hunger and malnutrition drivers</u>
                                    </a>
                                </MDBCol>
                                {/* <MDBCol col="6" className="text-end">
                                <u> 15.07.2020</u>
                            </MDBCol> */}
                            </MDBRow>
                            <a href="#!" className="text-dark">

                                <p>
                                    In many parts of the world, the pandemic has triggered brutal recessions and jeopardized access to food. Yet even before the pandemic, hunger was spreading; progress on malnutrition lagged. This was all the more so in nations affected by conflict, climate extremes or other economic downturns, or battling high inequality – all of which the report identifies as major drivers of food insecurity, which in turn interact.

                                    On current trends, The State of Food Security and Nutrition in the World estimates that Sustainable Development Goal 2 (Zero Hunger by 2030) will be missed by a margin of nearly 660 million people. Of these 660 million, some 30 million may be linked to the pandemic’s lasting effects.
                                </p>
                            </a>
                            <hr />
                            <a href="#!" className="text-dark">
                                {/* <MDBRow className="mb-467 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow> */}
                            </a>
                            <a href="#!" className="text-dark">
                                {/* <MDBRow className="mb-467 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow> */}
                            </a>
                            <a href="#!" className="text-dark">
                                {/* <MDBRow className="mb-467 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow> */}
                            </a>
                            <a href="#!" className="text-dark">
                                {/* <MDBRow className="mb-467 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow> */}
                            </a>
                        </div>
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-467 mb-lg-0">
                        <div>
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://www.wfpusa.org/wp-content/uploads/2022/11/WF1692199_IMG_1756.jpg"
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </a>
                            </MDBRipple>
                            <MDBRow className="mb-37">
                                <MDBCol col="6">
                                    <a href="" className="text-danger">
                                        <MDBIcon fas icon="chart-pie" className="me-1" />
                                        <u> What can (still) be done</u>
                                    </a>
                                </MDBCol>
                                {/* <MDBCol col="6" className="text-end">
                                <u> 15.07.2020</u>
                            </MDBCol> */}
                            </MDBRow>
                            <a href="#!" className="text-dark">

                                <p>
                                    As outlined in last year’s report, transforming food systems is essential to achieve food security, improve nutrition and put healthy diets within reach of all. This year’s edition goes further to outline six “transformation pathways”. These, the authors say, rely on a “coherent set of policy and investment portfolios” to counteract the hunger and malnutrition drivers.

                                    Depending on the particular driver (or combination of drivers) confronting each country, the report urges policymakers to:

                                    Integrate humanitarian, development and peacebuilding policies in conflict areas – for example, through social protection measures to prevent families from selling meagre assets in exchange for food;
                                    Scale up climate resilience across food systems – for example, by offering smallholder farmers wide access to climate risk insurance and forecast-based financing;
                                </p>
                            </a>
                            <hr />
                            <a href="#!" className="text-dark">
                                {/* <MDBRow className="mb-4 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow> */}
                            </a>
                            <a href="#!" className="text-dark">
                                {/* <MDBRow className="mb-467 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow> */}
                            </a>
                            <a href="#!" className="text-dark">
                                {/* <MDBRow className="mb-467 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow> */}
                            </a>
                            <a href="#!" className="text-dark">
                                {/* <MDBRow className="mb-4 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/034.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow> */}
                            </a>
                        </div>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-467 mb-lg-0">
                        <div>
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/05/27/16/v2Congo.jpg?width=1200"
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </a>
                            </MDBRipple>
                            <MDBRow className="mb-3">
                                <MDBCol col="6">
                                    <a href="" className="text-warning">
                                        <MDBIcon fas icon="code" className="me-1" />
                                        <u>The numbers in detail</u>
                                    </a>
                                </MDBCol>
                                {/* <MDBCol col="6" className="text-end">
                                <u> 15.07.2020</u>
                            </MDBCol> */}
                            </MDBRow>
                            <a href="#!" className="text-dark">
                                <h5>This is title of the news</h5>
                                <p>
                                    Already in the mid-2010s, hunger had started creeping upwards, dashing hopes of irreversible decline. Disturbingly, in 2020 hunger shot up in both absolute and proportional terms, outpacing population growth: some 9.9 percent of all people are estimated to have been undernourished last year, up from 8.4 percent in 2019.

                                    More than half of all undernourished people (418 million) live in Asia; more than a third (282 million) in Africa; and a smaller proportion (60 million) in Latin America and the Caribbean. But the sharpest rise in hunger was in Africa, where the estimated prevalence of undernourishment – at 21 percent of the population – is more than double that of any other region.

                                    On other measurements too, the year 2020 was sombre. Overall, more than 2.3 billion people (or 30 percent of the global population) lacked year-round access to adequate food: this indicator – known as the prevalence of moderate or severe food insecurity – leapt in one year as much in as the preceding five combined. Gender inequality deepened: for every 10 food-insecure men, there were 11 food-insecure women in 2020 (up from 10.6 in 2019).
                                </p>
                            </a>
                            <hr />
                            <a href="#!" className="text-dark">
                                {/* <MDBRow className="mb-4 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/011.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </a>
                        <a href="#!" className="text-dark">
                            <MDBRow className="mb-467 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/012.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </a>
                        <a href="#!" className="text-dark">
                            <MDBRow className="mb-467 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/013.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </a>
                        <a href="#!" className="text-dark">
                            <MDBRow className="mb-467 border-bottom pb-2">
                                <MDBCol size="3">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/014.webp"
                                        className="img-fluid shadow-1-strong rounded"
                                        alt="Hollywood Sign on The Hill"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <p className="mb-2">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </p>
                                    <p>
                                        <u> 15.07.2020</u>
                                    </p>
                                </MDBCol>
                            </MDBRow> */}
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
                <nav aria-label="...">
                    <MDBPagination circle className="mb-0 justify-content-center">
                        <MDBPaginationItem>
                            <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
                                Previous
                            </MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href="#">1</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem active>
                            <MDBPaginationLink href="#">
                                2 <span className="visually-hidden">(current)</span>
                            </MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href="#">3</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href="#">Next</MDBPaginationLink>
                        </MDBPaginationItem>
                    </MDBPagination>
                </nav>
            </div>
        </MDBContainer>
    );
}