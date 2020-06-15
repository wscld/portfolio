import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStream } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';
import Header from '../../Components/Header';
import Item from '../../Components/Item';
import { fetchRepos } from '../../Services/github';
import GithubItem from '../../Components/GithubItem';

const Home = ({ products, repos, loadProducts, loadRepos }: { products: any, repos: any, loadProducts: any, loadRepos: any }) => {
    const loadData = () => {
        var data = require('../../data.json');
        loadProducts(data.items);
    }

    const loadReposData = () => {
        fetchRepos("wscld").then((data: any) => {
            loadRepos(data);
        }).catch((err: any) => {

        })
    }

    useEffect(() => {
        loadData();
        loadReposData();
    }, []);

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="list-title"><FontAwesomeIcon icon={faStream}></FontAwesomeIcon> Projetos no Github</div>
                <div className="list">
                    {repos.map((val: any, index: number) =>
                        <GithubItem key={index} title={val.full_name} link={val.html_url} description={val.description} />
                    )}
                </div>
                <div className="list-title"><FontAwesomeIcon icon={faStream}></FontAwesomeIcon> Projetos Pessoais</div>
                <div className="list">
                    {products.map((val: any, index: number) =>
                        <Item key={index} status={val.status} index={index} date={val.date} thumbnail={val.thumbnail} title={val.title} description={val.description} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;