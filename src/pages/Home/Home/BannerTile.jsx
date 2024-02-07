import React from 'react';
import img1 from '../../../assets/home/banner.jpg'

const BannerTile = () => {
    return (
        <div className="hero mb-10" >
            <img className='w-full h-96 object-cover' src={img1}></img>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-4/5 bg-white px-20 py-5">
      <h1 className="mb-5 text-5xl font-bold text-center">Bistroo Boss</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>
    );
};

export default BannerTile;