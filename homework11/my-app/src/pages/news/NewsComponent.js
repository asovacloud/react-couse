import React, { Component } from 'react';

import './NewsComponent.css';

import Header from './HeaderComponent';
import Search from './SearchComponent';
import Article from './ArticleComponent';

import newsData from './newsList.json';
import Coin from '../coins/CoinsComponent';

class News extends Component {
    state = {
        newsList: [],
        search: '',
    };

    handleSearch = event => {
        this.setState({ search: event.target.value });
    };

    filterNewsList = () => {
        const { newsList, search } = this.state;
        return newsList.filter(article =>
            article.ArticleName.toLowerCase().includes(search.toLowerCase()),
        );
    };

    componentDidMount() {
        const myHeaders = new Headers({
            'Content-Type': 'text/plain',
        });

        const myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
        };

        const myRequest = new Request(
            'https://min-api.cryptocompare.com/data/v2/news/?lang=EN',
            myInit,
        );

        fetch(myRequest)
            .then(function(response) {
                return response.json();
            })
            .then(newsList => {
                this.setState({
                    newsList: Object.keys(newsList.Data)
                        .slice(0, 24)
                        .map(key => {
                            return newsList.Data[key];
                        }),
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="main">
                <Header />

                <Search
                    handler={this.handleSearch}
                    search={this.state.search}
                />

                <ul className="news-list">
                    {this.filterNewsList().map((article, i) => {
                        return (
                            <Article
                                id={article['id']}
                                key={article['id']}
                                ImageURL={article['imageurl']}
                                ImageAlt={article['title']}
                                Url={article['url']}
                                Title={article['title']}
                                Content={article['body']}
                                Categories={article['categories']}
                            />
                        );
                    })}
                    {/*{
                        Object.entries(newsData.Data).map( (article, i) => {
                            if (i < 12) {
                                const articleVariable = article[1];
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
                    }*/}
                </ul>
            </div>
        );
    }
}

export default News;
