import React, { Component, useEffect,useState} from 'react';
import { useAxios } from 'use-axios-client';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from './FormValidation';
import ValidationForm from './Validation';



const secStyle = createUseStyles({
    body: {
        textAlign: 'center',
    },

    cardBody: {
        marginLeft: 100,
        color: 'white',
    },

    cardBody1: {
        marginRight: 100,
        marginLeft: 50,
        color: 'white',
    },

    imgSize:{
        height:70,
        width:130,
        padding:10
    }
})


export default function Home() {
    return (
        <div className="body">
            <MDBCarousel showControls fade>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://nairametrics.com/wp-content/uploads/2020/04/investments-are-unreliable-.jpg'
                    alt='img1'
                />

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://unctad.org/sites/default/files/2020-08/Investment-Trends_800x450.jpg'
                    alt='img2'
                />

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://dataroompros.info/wp-content/uploads/2022/03/what-do-private-equity-firms-look-for-in-an-investment.jpg'
                    alt='img3'
                />
            </MDBCarousel>
            <br></br><br></br><br></br>
            <div>
                <h2 style={{ textAlign: 'center' }}>OUR FOCUS IS OUR CLIENTS' SUCCESS</h2>
                <br></br><br></br>
                <Cards></Cards>
                <br></br><br></br>
                <BasicExample></BasicExample>
                <ImgSimple></ImgSimple>
                {/* <Form/> */}
                <ValidationForm/>
            </div>
        </div>
    )
}

class Cards extends Component {
    state = { details: [] }
    //componentDidMount() 
    componentDidMount() {
        axios.get('http://localhost:3000/cards').then(
            res => {
                const details = res.data;
                this.setState({ details });
            }
        )
    }
    render() {
        return (
            <div className="row" style={{ marginLeft: 150, marginRight: 150 }}>
                {this.state.details.map(det =>
                    <div className="col" key={det.id}>
                        <div className="card" style={{ border: 'none' }}>
                            <div className="card-body">
                                <img src={det.image} style={{ height: 50, width: 70, marginLeft: 60 }}></img>
                                <br></br><br></br>
                                <h6 style={{ textAlign: 'center' }}>{det.title}</h6>
                                <br></br>
                                <p style={{ textAlign: 'center' }}>{det.description}</p>
                                <button style={{ marginLeft: 50, backgroundColor: 'white' }} >Read More</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

}


const BasicExample=()=> {

    const styles = secStyle()

    const [data, setData]=useState([])
    useEffect(()=>{
        fetchdata()
    }, [])
    const fetchdata=async()=>{
        const response=await axios.get("https://localhost:7013/api/ReactApps");
        setData(response.data)
        console.log(response.data)
    }
    // const [data, setData] = useState([])
    // useEffect(() => {
    
    //   fetchdata()
    // }, [])
    // const fetchdata = async () => {
    //   //https://localhost:7126/api/Registrations
    //   const response = await axios.get("https://localhost:7013/api/ReactApps");
    //   setData(response.data)
    // }


    return (
        <div style={{ backgroundColor: 'lightcyan' }}>
            <br></br><br></br>
            <h2 style={{ textAlign: 'center' }}>ADVICE ON HOW TO MAKE WISE INVESTMENTS</h2>
            <p style={{ textAlign: 'center', marginLeft: 150, marginRight: 150 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore manga aliqua. Ut enim ad minim veniam, quis nostrud exerciation ullamco laboris nisi ut aliquip</p>
            <br></br>
            <div className="row" >
                <div className="col col-3" style={{ marginLeft: 150 }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{ padding: 10 }} src="https://media.istockphoto.com/photos/businessmen-greeting-each-other-with-a-handshake-picture-id455690219?k=20&m=455690219&s=612x612&w=0&h=EYaoNuyjRdC5kDS_HRD2sKgSvBKfFTFELzCeA3Oe9zE=" />
                        
                        <Card.Body  className={styles.body}>
                        
                        {data.map((x, index) => (
                               <div>
                            <Card.Title style={{color:'#f85422'}} >{x.ename}</Card.Title>
                            <Card.Text>
                            {x.edescription}
                            </Card.Text>
                            <Button variant="light"><i style={{color:'#f85422'}} class="fa-solid fa-circle-arrow-right fa-2x"></i></Button>
                            </div>
                              ))}
                           
                            
                           
                        </Card.Body>
                      
                    </Card>
                </div>
                <div className="col col-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{ padding: 10 }} src="https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1312/vadymvdrobot131200071/24194675-young-happy-businesswoman-talking-on-the-phone-and-writing-notes-in-office.jpg" />
                        <Card.Body className={styles.body}>
                            <Card.Title style={{color:'#f85422'}}>Laoreetum</Card.Title>
                            <Card.Text>
                                In teleconference people invited to the meeting can
                                join by dialing a number which will connect them to a conference bridge. It is connected by various methods.
                            </Card.Text>
                            <Button variant="light"><i style={{color:'#f85422'}} class="fa-solid fa-circle-arrow-right fa-2x"></i></Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{ padding: 10, height: 198 }} src="https://media.istockphoto.com/photos/shot-of-two-businesspeople-standing-together-and-holding-a-digital-picture-id1350790881?b=1&k=20&m=1350790881&s=170667a&w=0&h=UvYg_fARP_2sye6oSNOU6c5-3_TrfOp9qgMHJt5gp88=" />
                        <Card.Body className={styles.body}>
                            <Card.Title style={{color:'#f85422'}}>Foud maxime</Card.Title>
                            <Card.Text>
                                An effective meeting brings a thoughtfully selected group of people together for a specific purpose,
                                provides a forum for open discussion, and delivers a result.
                            </Card.Text>
                            <Button variant="light"><i style={{color:'#f85422'}} class="fa-solid fa-circle-arrow-right fa-2x"></i></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br></br><br></br>
            <SimpleCard></SimpleCard>
        </div>
    );
}


function SimpleCard() {
    const styles = secStyle()
    return (
        <div>
            <CardGroup style={{ backgroundColor: 'lightblue' }}>
                <Card style={{ backgroundColor: '#f85422' }}>
                    <Card.Body className={styles.cardBody}>
                        <Card.Title>Fresh Investment Solutions!</Card.Title>
                        <Card.Text>
                            * We have competing financial priorities in our life.
                        </Card.Text>
                        <Card.Text>
                            * Size matters and it matters a lot.
                        </Card.Text>
                        <Card.Text>
                            * Like it or not, but risk matters as much as returns.
                        </Card.Text>
                        <Card.Text>
                            * Be wary of equity funds where there is a constant churn.
                        </Card.Text>
                        <Card.Text>
                            * A phased approach works best in case of equity funds.
                        </Card.Text>
                        <Button style={{ backgroundColor: '#f85422', border: 'solid' }}>Learn more</Button>
                    </Card.Body>
                </Card>
                <Card style={{ backgroundColor: 'grey' }}>
                    <Card.Body className={styles.cardBody1}>
                        <Card.Title>Learning to Save Money</Card.Title>
                        <Card.Text>
                            * We have competing financial priorities in our life.
                        </Card.Text>
                        <Card.Text>
                            * Size matters and it matters a lot.
                        </Card.Text>
                        <Card.Text>
                            * Like it or not, but risk matters as much as returns.
                        </Card.Text>
                        <Card.Text>
                            These funds are the most vulnerable to volatility and an SIP approach help you to make the most of the volatility.
                            Also SIP is a good wealth creator over a longer period of time.
                        </Card.Text>
                        <Button style={{ backgroundColor: 'grey', border: 'solid' }} >Learn more</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}


function ImgSimple(){
    const styles = secStyle()

    return(
        <div style={{paddingTop:50, paddingBottom:10,paddingLeft:230}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM94FrISHMo9B9TeyWU-F__iVv6_7QjP6qhrnjLINLaHVBSgZIo1KCrJ6Gb8V5FblnyQ&usqp=CAU" className={styles.imgSize}></img>
            <img src="https://images.squarespace-cdn.com/content/v1/5c08276ada02bc6f72ea0cfe/1594373937107-9TY8XMZIBBN8TAT817ZR/logo+design" className={styles.imgSize}></img>
            <img src="https://1000logos.net/wp-content/uploads/2018/08/Lenovo-logo.jpg" className={styles.imgSize}></img>
            <img src="https://1000logos.net/wp-content/uploads/2018/08/Nokia-logo.jpg" className={styles.imgSize}></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmzRkwtd7Ri7oggkk8BQU34s5t_Hj95tfDSm9HcBKJl-CZjcEv94QvrvwCiaB4llb0Rk&usqp=CAU" className={styles.imgSize}></img>
            <img src="https://media.istockphoto.com/vectors/blue-logistics-logo-with-lines-highway-vector-vector-id1313843101?k=20&m=1313843101&s=612x612&w=0&h=lzAMeQmyJn7Il8xwTDqaYN-aIMTx-jXk-ycpFJMB8H8=" className={styles.imgSize}></img>
        </div>
    )
}


