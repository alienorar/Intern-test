import './index.css'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-details">
        <h2>Introduce Your Product Quickly & Effectively</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <div className="hero-details-btns">
          <button className='btn-left'>
            Purchase UI Kit
          </button>
          <button className='btn-right'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero