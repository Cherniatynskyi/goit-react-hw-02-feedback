import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ onLeaveFeedback }) => {
        return (
        <>
            <ul className={css.buttonList}>
                <li><button className={css.buttonItem} id="good" onClick={onLeaveFeedback}>Good</button></li>
                <li><button className={css.buttonItem} id="neutral" onClick={onLeaveFeedback}>Neutral</button></li>
                <li><button className={css.buttonItem} id="bad" onClick={onLeaveFeedback}>Bad</button></li>
            </ul>
                
        </>
    )}
