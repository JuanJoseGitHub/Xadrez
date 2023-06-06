import React from 'react'
import wallpaper from '../graficos/Home/Wall3.jpg'
import style from '../css/home.module.css'
export default function Home() {
  return (
    <div className={style.centro}>
      <img className={style.foto} src={wallpaper} alt='wallpaper'></img>
    </div>
  )
}
