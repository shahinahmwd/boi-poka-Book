import React from 'react'
import bannerImg from '../../assets/banner.png'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg " />
        <div className='space-y-6'>
          <h1 className="md:text-7xl text-2xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  )
}

export default Banner