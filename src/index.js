import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
//SQL Lite implementation code reviewed in class
//package for sqlite3 from https://www.npmjs.com/package/sqlite#install-sqlite3
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// you would have to import / invoke this in another file
async function openDb () {
  return open({
    filename: 'bgg.db',
    driver: sqlite3.Database
  })
}

async function getGameData(){
  const db = await openDb();
  const params = {
    ':name': game_name,
    ':limit': limit
  };
  const result = await db.all("select * from bgg_hotness where game_title = :name order by hotness_date DESC limit :limit", params);
  for (let item of result){
    console.log(item);
  }
}

async function main(){
  const db = await openDb();
  const result = await db.all("select * from bgg_hotness order by hotness_date asc limit 10");
  for (let item of result){
    console.log(item);
  }
  getGameData("Gloomhaven");
  getGameData("On Mars");
}
*/

ReactDOM.render(
  <h1>Hello React World</h1>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
