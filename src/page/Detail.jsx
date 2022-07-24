import React, { useEffect, useState, useRef } from 'react'
import style from './Detail.module.css'
import Select from 'react-select'
import { MENU_TAJWID, TAJWID } from '../constant'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


function Detail() {
  const navigate = useNavigate()
  const [dataSelect, setDataSelect] = useState([])
  const loc = useLocation()
  const idTajwid = loc.pathname.split('/')[2]
  const [value, setValue] = useState([])
  const [data, setData] = useState([])
  const ref = useRef(null)

  const getMateri = ()=> {
    const data = TAJWID.filter(i => i.title === idTajwid)
    const dataSelect = MENU_TAJWID.map(i => ({value: i.id, label: i.subtitle}))
    const value = dataSelect.filter(i => i.value === idTajwid)
    setDataSelect(dataSelect)
    setValue(value)
    setData(data[0].detail)

    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(()=> {
    getMateri()
    //eslint-disable-next-line
  },[])
  
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '300px',
      '@media (max-width: 574px)' : {
        width: '250px'
      }
    }),
    menu: (provided) => ({
      ...provided,
      color: 'white',
      padding: 10,
      backgroundColor: 'rgba(184,109,54,1)',
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor:'transparent',
      boxShadow: 'none',
      '&:hover': {
          border: '1px solid rgba(184,109,54,1)',
      },
      border: state.isFocused ? '1px solid rgba(184,109,54,1)' : ''
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white'
    }),
    option: (provided, state) => ({
      ...provided,
      '&:hover': {
        backgroundColor: 'rgb(79,0,58)'
      },
      backgroundColor: state.isFocused ? "#b86336": null
    })
  }

  const onChange = (option)=> {
    navigate('/detail/'+option.value)
  }


  return (
    <div className={style.content}>
      <div className={style.nav}>
        <h3 onClick={()=> navigate('/')} ref={ref}>Home</h3>
        <Select isSearchable={false} onChange={onChange} styles={customStyles} value={value} options={dataSelect} placeholder='Tajwid'/>
      </div>
      <motion.div
      className={style.contentTajwid}
      >
        <motion.div
        initial={{x: -350}}
        animate={{x:0}}
        transition={{ duration: 1 }}>
          <h2>Hukum {value[0]?.label}</h2>
        </motion.div>
        {data.map((item, i)=> (
          <motion.div key={i}
          className={style.card}
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{duration: 1, delay: i + 0.1}} 
          >
            <div className={style.numbered}>
              {i + 1}
            </div>
            <div className={style.cardBody}>
              <p>{item.subjenis}</p>
              <p>{item.jenis}</p>
              <hr style={{width:'100%'}}/>
              <p className={style.keterangan}>{item.keterangan}</p>
              <div className={style.cardFooter}>
                <audio controls >
                  <source src={item?.audio} type='audio/mp3'/>
                </audio>
                {item?.example && item.example}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Detail