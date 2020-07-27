import React from 'react';
import AllDataProp, { IndexProp } from '../../data/dataTypes';
import resume from '../../Documents/resume.pdf';

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

          <form action={resume} className="resume">
            <input type="submit" value="Resume" />
          </form>
          <ul className="social">{networks}</ul>
        </div>
      </header>
    </div>
  );
}

export default Main;
