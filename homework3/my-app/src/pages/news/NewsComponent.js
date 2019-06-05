import React from 'react';

import './NewsComponent.css';

import Header from './HeaderComponent';
import Search from './SearchComponent';
import Article from './ArticleComponent';

import newsData from './newsList.json';

function News() {
    return (
        <div className='main'>

            <Header />

            <Search />

            <ul className='news-list'>
                {
                    Object.entries(newsData.Data).map( (article, i) => {
                        if (i < 12) {
                            const articleVariable = article[1];
                            console.log( articleVariable['imageurl'] );
                            return <Article
                                id={ articleVariable['id'] }
                                key={ articleVariable['id'] }
                                ImageURL={ articleVariable['imageurl'] }
                                ImageAlt={ articleVariable['title'] }
                                Url={ articleVariable['url'] }
                                Title={ articleVariable['title'] }
                                Content={ articleVariable['body'] }
                                Categories={ articleVariable['categories'] }
                            />
                        }

                        return null;

                    } )
                }
            </ul>
        </div>
    );
}

export default News;