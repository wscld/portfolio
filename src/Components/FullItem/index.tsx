import React from 'react';
import TextTruncate from 'react-text-truncate';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './styles.scss';

const FullItem = (props: any) => {
    return (
        <div className="full-item">
            <Carousel
                infinite
                arrows
                dots
            >
                {props.images.map((val: any, index: number) => <img key={index} className="carousel-img" src={val}/>)}
            </Carousel>
            <div className="content">
                <div className="title">{props.title}</div>
                <TextTruncate
                    line={10}
                    element="div"
                    truncateText="…"
                    containerClassName="description"
                    text={props.description}
                />
                <div className="stack">
                    Stack:
                    <ul>
                        {props.stack.map((val:any,index:number)=><li key={index}>{val}</li>)}
                    </ul>
                </div>
                {props.link !== "" ? <a target="_blank" href={props.link}><div className="more">Acessar</div></a> : null}
            </div>
        </div>
    )
}

export default FullItem;