import { useRef } from 'react';
import CardTajwid from '../components/card/CardTajwid'
import { MENU_TAJWID } from '../constant'

function Home() {
    const content = useRef(null)

    const scroll = ()=> {
      content.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="App">
        <header className="App-header">
            <p>Belajar Tajwid</p>
            <button onClick={scroll}>YUK</button>
            <div className='copyright'>
            <p>Haerul Umam</p>
            <p>2159201028</p>
            </div>
        </header>
        <section>
            <p className='arabic'>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِمِ</p>
            <div className='content-tajwid' >
            {MENU_TAJWID.map((item, i)=> (
                <CardTajwid key={i} title={item.title} subtitle={item.subtitle} idPage={item.id}/>
            ))}
            </div>
        </section>
            <div ref={content} className='footer'>
                haerul umam @2022
            </div>
        </div>
    )
}

export default Home