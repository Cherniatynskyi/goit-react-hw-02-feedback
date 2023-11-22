import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
        return (
        <>
            <ul className={css.buttonList}>
                    {options.map(button => (
                        <li key={options.indexOf(button)}><button className={css.buttonItem} id={button} onClick={onLeaveFeedback}>{button}</button></li>
                ))}
            </ul>
                
        </>
    )}
