import './index.css'


const Footer = () => {
  return (
    <section className='footer' >
      <div className="footer-top container">
        <h4>
          A Price To Suit Everyone
        </h4>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <h2>$40</h2>
        <p>UI Design Kit</p>
        <div className='footer-btns'>
          <p>See, One price. Simple.</p>
          <button>
            Purchase Now
          </button>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="footer-landing">
          <p>©2023 Yourcompany</p>
          <h2>Landing</h2>
          <button>Purchase now</button>
        </div>
        <div className="footer-navigation">
          <ul className='footer-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="footer-icons">
            <i className="fa-brands fa-square-facebook"><a href="https://www.facebook.com/"></a></i>
            <i className="fa-brands fa-linkedin"><a href="https://www.linkedin.com"></a></i>
            <i className="fa-brands fa-youtube"><a href="https://www.youtube.com"></a></i>
            <i className="fa-brands fa-square-twitter"><a href="https://x.com"></a></i>
            <i className="fa-brands fa-square-instagram"><a href="https://www.instagram.com"></a></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer