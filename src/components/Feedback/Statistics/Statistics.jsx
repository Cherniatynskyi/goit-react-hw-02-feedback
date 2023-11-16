import css from './Statistics.module.css'
import { feedbackVisualisation } from "./feedbackVisual"
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (<>
            <h3 className={css.title}>Statistics</h3>
            <ul className={css.statsList}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
            <li>Positive feedback: <span style={{ color: feedbackVisualisation(positivePercentage)}} >{positivePercentage}</span></li>  
            </ul>
        </>)
}