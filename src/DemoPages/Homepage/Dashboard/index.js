import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// import AppHeader from "../../../Layout/AppHeader"
import {Row, CardBody} from "reactstrap";
import bg1 from "../../../assets/utils/images/originals/city.jpg";
import axios from "axios";
import Kartu from "../../Movie/Kartu";

const Dashboard = () => {
    console.log("udah ada")
    const [dataCard, setDataCard] = useState([])
    let imageArrayPath = [];

    useEffect(() => {
        axios.get("http://localhost:1818/api/movies").then(res => {
            setDataCard(res.data)

            console.log(res.data)
        })
    }, [])

    return(
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>

                <div className="app-main">
                    <div className="app-main__inner">
                        <Row>
                            {/*<Col md="12">*/}
                            {/*<Card className="main-card mb-5">*/}
                            <CardBody>
                                <div
                                    className="p-5 bg-plum-plate">
                                    <div className="slide-img-bg"
                                         style={{
                                             fade: true,
                                             backgroundImage: 'url(' + bg1 + ')'
                                         }}/>
                                    <div className="slider-content" style={{
                                        color: "white"
                                    }}>
                                        <h3>Welcome.</h3>
                                        <h4>
                                            Millions of movies, TV shows and people to discover. Explore now.
                                        </h4>
                                    </div>
                                </div>
                            </CardBody>
                            {/*</Col>*/}
                        </Row>
                        {/*<Row>*/}
                        {/*    <CardBody>*/}
                        {/*        <Carousel/>*/}
                        {/*    </CardBody>*/}
                        {/*</Row>*/}

                        <Row>
                            <h3 style={{margin: "40px", marginBottom:"20px"}}> What's Popular </h3>
                        </Row>
                        <Row>
                            {dataCard.map((card, index) => (
                                <Kartu key={index} id={card.id} title={card.moviesName}
                                       category={card.categoryMovies}
                                       year={card.year} description={card.description}
                                       image={imageArrayPath[index]}/>
                            ))}

                        </Row>
                        {/*</Card>*/}
                    </div>

                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}
export default Dashboard;
