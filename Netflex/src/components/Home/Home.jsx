import Header from '../Header/Header'
import "./home.css"
import Card from '../Card/Card'
import { accordions, cards } from '../utils/data'
import { useState } from 'react';
import Acordion from '../Accordion/Acordion';
import Footer from '../Footer/Footer';
const Home = () => {
 
  const [iconOpen, seticonOpen] = useState(false)


  return (
    <div className='container'>
        <Header/>
        <section className='section_one'>
        <div className='section-title'>More Reasons to Join</div>
        <div className='cards'>
          {cards.map((card)=>(
            <Card title={card.title} description={card.description} svg={card.svg}/>
          ))}
        </div>
        </section>

        <section className='section_two'>
        <div className='section-title'>Frequently Asked Questions</div>
        {
          accordions.map((accordion)=>(
            <Acordion accordion={accordion}/>

          ))
        }
        </section>
    </div>
  )
}

export default Home