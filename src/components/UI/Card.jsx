import './Card.css'

export const Card = (props) => {
    const classes = 'cardd ' + props.className;
    return <div className={classes}>{props.children}</div>;
}