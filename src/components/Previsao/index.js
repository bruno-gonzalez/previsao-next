import classNames from "classnames";
import styles from "./Previsao.module.css";
import { BsCloudsFill, BsCloudRainFill, BsCloudLightningRainFill, BsSunFill, BsCloudSunFill, BsFillCloudMoonFill, BsFillCloudSnowFill, BsCloudFog2Fill, BsCloudHailFill, BsFillMoonStarsFill } from "react-icons/bs"

export default function PrevisaoCard({ min, max, description, rain_probability, weekday, condition, dia}) {
   return (
      <div className={classNames({
         [styles.dia]:true,
         [styles.dia__nublado]: condition == "cloudly_day" || condition == "cloud",
         [styles.dia__sol]: condition == "clear_day",
         [styles.dia__chuva]: condition == "rain",
      })}>
         <h3 className={styles.dia__semana}>{weekday} - {dia}</h3>
         {condition == "rain" && <BsCloudRainFill color="#3680ff" size={40} />}   {/* Chovendo */}
         {condition == "cloud" && <BsCloudsFill size={40} />}   {/* Nublado */}
         {condition == "storm" && <BsCloudLightningRainFill size={40} />}   {/*Tempestade*/}
         {condition == "clear_day" && <BsSunFill color="#fd8700" size={40} />}  {/* Dia Limpo */}
         {condition == "clear_night" && <BsFillMoonStarsFill size={40} />}   {/* Noite Limpa*/}
         {condition == "cloudly_day" && <BsCloudSunFill size={40} />} {/*Dia Nublado */}
         {condition == "cloudly_night" && <BsFillCloudMoonFill size={40} />}  {/* Noite Nublada*/}
         {condition == "fog" && <BsCloudFog2Fill size={40} />}   {/* Neblina */}
         {condition == "snow" && <BsFillCloudSnowFill size={40} />}  {/* Nevando */}
         {condition == "hail" && <BsCloudHailFill size={40} />}  {/* Granizo */}
         <div className={styles.temperaturas}>
            <p className={styles.text}>Max: {max}°C</p>
            <p className={styles.text}>Min: {min}°C</p>
         </div>
         <p className={styles.text}>{description}</p>
         <p className={styles.text}>Probalidade de chuva: {rain_probability}%</p>
      </div>
   )
}