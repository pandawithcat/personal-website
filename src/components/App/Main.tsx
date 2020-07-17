import React from 'react';
import Cards from './Cards';
import AllDataProp, { IndexProp } from '../../data/dataTypes';

function Main({ allData }) {
  const homeData: IndexProp = (allData as AllDataProp).indexProp;
  const networks = homeData.social.map((network) => {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.image}></i>
        </a>
      </li>
    );
  });
  return (
    <div>
      <header>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{homeData.name}.</h1>
            <h3>{homeData.welcome}</h3>
          </div>
          <Cards cardsData={allData.cardProps}></Cards>
          <ul className="social">{networks}</ul>
        </div>
      </header>
    </div>
  );
}

export default Main;
