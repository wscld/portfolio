import React from 'react';
import TextTruncate from 'react-text-truncate';
import useWindowSize from '../../windowHook';
import { Link } from 'react-router-dom';
import './styles.scss';

const Item = (props: any) => {
    const size = useWindowSize();
    return (
        <div className="item">
            {props.index % 2 === 0 || (size.width !== 0 && size.width < 800) ? <div className="image"><img src={props.thumbnail}></img></div> : null}
            <div className="content">
                <div className="title">
                    <div className="name">{props.title}</div>
                    <div className="date">{props.date} - {props.status}</div>
                </div>
                <TextTruncate
                    line={2}
                    element="div"
                    truncateText="…"
                    containerClassName="description"
                    text={props.description}
                />               
                <Link to={"/portfolio/p/"+props.index}>
                    <div className="more">Ler mais</div>
                </Link>
            </div>
            {props.index % 2 !== 0 && (size.width !== 0 && size.width > 800) ? <div className="image"><img src={props.thumbnail}></img></div> : null}
        </div>
    )
}

export default Item;