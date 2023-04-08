import classNames from "classnames";
import styles from "./Hoje.module.css";
import { BsCloudsFill, BsCloudRainFill, BsCloudLightningRainFill, BsSunFill, BsCloudSunFill, BsFillCloudMoonFill, BsFillCloudSnowFill, BsCloudFog2Fill, BsCloudHailFill, BsFillMoonStarsFill } from "react-icons/bs"

export default function Hoje({ city, currently, description, temp, time, wind_speedy, date, condition_slug, sunset, sunrise }) {
   return (
      <div className={classNames({
         [styles.card]:true,
         [styles.card__nublado]: condition_slug == "cloudly_day"
      })}>
         <h1 className={styles.cidade}>{city}</h1>
         <span>{currently} - {date} - Atualizado: {time}</span>
         <div className={styles.icon__container}>
            {condition_slug == "rain"  && <BsCloudRainFill size={40} />}   {/* Chovendo */}
            {condition_slug == "cloud" && <BsCloudsFill size={40} />}   {/* Nublado */}   
            {condition_slug == "storm" && <BsCloudLightningRainFill size={40} />}   {/*Tempestade*/}   
            {condition_slug == "clear_day" && <BsSunFill size={40} />}  {/* Dia Limpo */}   
            {condition_slug == "clear_night" && <BsFillMoonStarsFill size={40} />}   {/* Noite Limpa*/}   
            {condition_slug == "cloudly_day" && <BsCloudSunFill size={40} />} {/*Dia Nublado */}   
            {condition_slug == "cloudly_night" && <BsFillCloudMoonFill size={40} />}  {/* Noite Nublada*/}   
            {condition_slug == "fog" && <BsCloudFog2Fill size={40} />}   {/* Neblina */}   
            {condition_slug == "snow" && <BsFillCloudSnowFill size={40} />}  {/* Nevando */}   
            {condition_slug == "hail" && <BsCloudHailFill size={40} />}  {/* Granizo */}   
            <p>{temp}°C </p>
         </div>
         <div className={styles.tempo}>
            <p>{description}</p>
            <p>Vento: {wind_speedy}</p>
            <p>Nascer do Sol: {sunrise}</p>
            <p>Pôr do Sol: {sunset}</p>
         </div>

      </div>
   )
}