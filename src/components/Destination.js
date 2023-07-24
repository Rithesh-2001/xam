import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import five from '../pictures/download.jpeg';
import six from '../pictures/Hampi_karnataka.jpeg';
import seven from '../pictures/India_Gate_in_New_Delhi_03-2016.jpg';
import eight from '../pictures/.Kerala_Natural_Beauty.jpg';
import nine from '../pictures/photo-1608037521277-154cd1b89191.jpg';
import ten from '../pictures/Taj-Mahal-Agra-India.webp.jpg';



function Destination() {
    return (
        <>
            <h1 className='text-center'>Destination Page</h1>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={five} />
                            <Card.Body>
                                <Card.Title>hampi</Card.Title>
                                <Card.Text>
                                    hampi temple is not only famous among the tourists who are religiously inclined, but it is tremendously famous among other nature lovers as well because of its location
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={six} />
                            <Card.Body>
                                <Card.Title>india gate</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={seven} />
                            <Card.Body>
                                <Card.Title>kerala</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={eight} />
                            <Card.Body>
                                <Card.Title>taj mahal</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nine} />
                            <Card.Body>
                                <Card.Title>nature</Card.Title>
                                <Card.Text>
                                    nature
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ten} />
                            <Card.Body>
                                <Card.Title>Brihadeeswara Temple</Card.Title>
                                <Card.Text>
                                    Brihadeeswara temple is located in the Thanjavur city of Tamil Nadu, and it is one of the most famous and ancient temples in India.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default Destination;