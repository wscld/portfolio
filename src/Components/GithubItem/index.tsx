import React from 'react';
import TextTruncate from 'react-text-truncate';
import useWindowSize from '../../windowHook';
import { Link } from 'react-router-dom';
import './styles.scss';

const GithubItem = (props: any) => {
    return (
        <div className="github-item">
            <div className="content">
                <a href={props.link} target="_blank">
                    <div className="title">
                        <div className="name">{props.title}</div>
                        <div className="date">{props.date} - {props.status}</div>
                    </div>
                </a>
                <TextTruncate
                    line={2}
                    element="div"
                    truncateText="…"
                    containerClassName="description"
                    text={props.description}
                />
            </div>
        </div>
    )
}

export default GithubItem;