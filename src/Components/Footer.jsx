import React from 'react';

import { createUseStyles } from 'react-jss';

const secStyle = createUseStyles({
    i: {
        backgroundColor: '#f85422',
        borderRadius: 40,
        textAlign: 'center',
        verticalAlign: 'middle',
        padding: 20,
        paddingLeft: 25,
        paddingTop: 25,
    }
})

function Footer() {
    const styles = secStyle()
    return (
        <div style={{marginTop:'none'}}>
            <div style={{ marginLeft: 100, padding: 57 }}>
                <h6 style={{ float: 'left', padding: 20 }} ><span className={styles.i}><i class="fa-solid fa-location-dot fa-2x"></i></span> NEW YORK 9870 ST VINCENT GLASGOW</h6>
                <h6 style={{ float: 'left', padding: 20 }}><span className={styles.i}><i class="fa-solid fa-envelope fa-2x"></i></span> CONTACT@DEMOLINK.ORG</h6>
                <h6 style={{ float: 'left', padding: 20 }}><span className={styles.i}><i class="fa-solid fa-phone fa-2x"></i></span> CALL US: +1 800 603 6035</h6>
            </div>
            <div >
                <Footer1 ></Footer1>
            </div>
        </div>
    )
}


function Footer1() {
    return (
        <div style={{ background: 'grey', marginTop: 70, padding: 100, }}>
            <div className='row'>
                <div className='col col-6'>
                    <div className='row'>
                        <p>
                        <h4 style={{ float: 'left', color: 'white',paddingRight:5 }}>HABER </h4>
                        <p style={{ textSize: 5, float: 'left', marginLeft: 5, color: 'white' }}> &copy;2015 privacy policy</p>
                        </p>
                    </div>
                    <div className='row'>
                        <p>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} class="fa-brands fa-square-twitter fa-2x"></i>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} class="fa-brands fa-square-youtube fa-2x"></i>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} class="fa-solid fa-wifi fa-2x"></i>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} class="fa-brands fa-square-facebook fa-2x"></i>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} class="fa-brands fa-square-google-plus fa-2x"></i>
                        </p>
                    </div>
                </div>
                <div className='col col-6'>
                    <img style={{ height: 200, width: 400, marginLeft: 50 }} src="https://sim-unlock.net/foto/12_48_26_Google_Maps.png"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer;