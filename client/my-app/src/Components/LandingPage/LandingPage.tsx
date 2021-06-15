import React from 'react';
import Features from './Features';
import Header from './Header';
import Testimonials from './Testimonials';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';

const LandingPage: React.FC = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            {/* {features.map((obj) => {
                <Features text={obj.text} img={obj.img} />;
            })} */}

            <Testimonials />
            <div style={{ marginTop: '200px' }}>
                <Features img={img1} text={'HIGH LEVEL OF CANDIDATES'} />
                <Features img={img2} text={'DIRECT CONTACT'} />
                <Features img={img3} text={'SOFT SKILLS'} />
                <Features img={img4} text={'LATEST TECNOLOGIES'} />
            </div>
        </div>
    );
};

export default LandingPage;
