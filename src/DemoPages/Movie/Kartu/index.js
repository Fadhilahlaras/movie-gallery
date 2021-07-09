import React, {Component, Fragment, useEffect, useState} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, CardFooter, Button, CardText} from "reactstrap";
import axios from "axios";


const ThisCardMovie = (props) => {
    const [img, setImg] = useState("")

    useEffect(() => {
            axios.get('http://localhost:1818/api/movies/getImage/' + props.id).then(res => {
                setImg(res.data)
            })
        }, []
    )

    // const toggleAddToCart = () => {
    //     setAddToCartModal(!addToCartModal)
    //     onSubmit();
    // }
    //
    // const onChangeToggleAddToCart = () => {
    //     setAddToCartModal(!addToCartModal)
    // }
    //
    //
    // const onSubmit = () => {
    //     const formData = new FormData();
    //
    //     const json = {
    //         "addToCart": [
    //             {
    //                 "id": props.id,
    //                 "idProduct": props.id,
    //                 "productQuantity": 1,
    //                 "idUser" : 1
    //             }
    //         ]
    //     };
    //     console.log(json)
    //     const blobDoc = new Blob([json], {
    //         type: 'application/json'
    //     });
    //
    //     formData.append('data', json)
    //
    //
    //     console.log(formData)
    //     axios.post("http://localhost:1717/api/cart", json)
    //         .then(res => console.log(res.data))
    //
    // }

    return (
        <Fragment>
            <Col sm="3">
                <Card className="main-card mb-3">
                    <CardImg top width="100%"
                             src={"data:image/*;base64," + img}
                             alt={props.title} style={{backgroundSize: "cover", height: "300px"}} className="mt-3"/>
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.categoryMovies}
                            <br/> Year {props.year}
                        </CardSubtitle>
                        <CardText>
                            <strong>{props.description}</strong>
                        </CardText>
                    </CardBody>
                    <CardFooter>
                    {/*    <Button style={{margin:"auto"}}color="warning" type="button" onClick={()=>toggleAddToCart()}>Add to Cart</Button>*/}
                    </CardFooter>
                    {/*<AddToCard toggle={() => {*/}
                    {/*    toggleAddToCart()*/}
                    {/*}} modal={addToCartModal} onChangeToggle={onChangeToggleAddToCart}/>*/}

                </Card>
            </Col>

        </Fragment>
    )
}

export default ThisCardMovie