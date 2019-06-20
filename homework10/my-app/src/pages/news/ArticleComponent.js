import React from 'react';

//import {CRYPTO_COMPARE_URL} from "../coins/constants";
// import { CRYPTO_COMPARE_URL } from './constants';

function Article(props) {
    return (
        <>
            <li>
                <div className="news-list__image">
                    <a
                        href={props.Url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={props.ImageURL}
                            width="300"
                            height="300"
                            alt={props.ImageAlt}
                        />
                    </a>
                </div>
                <div className="news-list__description">
                    <h2>
                        <a
                            href={props.Url}
                            target="_blank"
                            rel="noopener noreferrer">
                            {props.Title}
                        </a>
                    </h2>
                    <dl className="news-list__description__category">
                        <dt>Category:</dt>
                        <dd>{props.Categories}</dd>
                    </dl>
                    <p>{props.Content}</p>
                </div>
            </li>
        </>
    );
}

export default Article;
