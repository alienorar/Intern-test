import networkingImg from '../../assets/networking.png'
import loginImg from '../../assets/login.png'
import pathImg from '../../assets/Path.png'
import socialImg from '../../assets/undraw_social_influencer_sgsv.png'
import mentionImg from '../../assets/undraw_mention_6k5d.png'

import './index.css'
const Main = () => {
  //==== to improve performance and make reusable===
  const networking_cards = [
    {
      id: 1,
      img: networkingImg,
      title: "Title Goes Here",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    },
    {
      id: 2,
      img: networkingImg,
      title: "Title Goes Here",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    }
  ]

  const path_cards = [
    {
      id: 3,
      img: pathImg,
      title: "Light, Fast & Powerful",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
    },
    {
      id: 4,
      img: socialImg,
      title: "Light, Fast & Powerful",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
    },
    {
      id: 5,
      img: mentionImg,
      title: "Light, Fast & Powerful",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
    },

  ]




  return (
    <>
      {/* // ==========networking section ========= */}
      <section>
        <div className='networking container'>
          <div className="networking-details">
            <div>
              <h2>Light, Fast & Powerful</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
            <div className="networking-titles">
              {
                networking_cards?.map((item) => {
                  return <div key={item.id}>
                    <div>
                      <img src={item.img} alt="networking_img" />
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
          <div className="networking-img">
            <img src={loginImg} alt="login-img" />
          </div>
        </div>
      </section>
      {/* // ==========Path section ========= */}
      <section className='container'>
<div className="path-section">
          {
            path_cards?.map((item) => {
              return <div key={item.id} className="path">
                <div className='path-img'>
                  <img src={item.img} alt="path-img" />
                </div>
                <div className="path-details">
                  <h2>
                    {item.title}
                  </h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            })
          }
</div>
       

      </section>
    </>


  )
}

export default Main