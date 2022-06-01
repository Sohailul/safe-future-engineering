import React from 'react';
import banner from '../../assets/img/automation.jpg';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} class="lg:max-w-xl rounded-lg" alt=''/>
                    <div>
                        <h1 class="text-4xl font-bold mb-3 leading-snug">Electrical Engineering Solution For Safest Constructions </h1>
                        <button class="btn btn-primary text-white font-bold">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;