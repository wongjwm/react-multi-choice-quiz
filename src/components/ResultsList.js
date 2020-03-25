import React from 'react';
import {Radar} from 'react-chartjs-2';

import { CSSTransitionGroup } from 'react-transition-group';
import Result from './Result.js';

function ResultsList(props) {
  var youOptions = [0, 1, 2, 3, 4],
      averageOptions = [0, 1, 2, 3, 4];
  youOptions.sort(() => Math.random() - 0.5);
  averageOptions.sort(() => Math.random() - 0.5);

  var results = {
    "Textual Data": {
      "name": "Textual Data",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "you": youOptions[0],
      "average": averageOptions[0],
    },
    "Image & Voice": {
      "name": "Image & Voice",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "you": youOptions[1],
      "average": averageOptions[1],
    },
    "Location": {
      "name": "Location",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "you": youOptions[2],
      "average": averageOptions[2],
    },
    "Relational Data": {
      "name": "Relational Data",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "you": youOptions[3],
      "average": averageOptions[3],
    },
    "Personal Metadata": {
      "name": "Personal Metadata",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "you": youOptions[4],
      "average": averageOptions[4],
    },
  };

  var radar = {
    data: {
      labels: Object.keys(results),
      datasets: [
        {
          label: "Average response",
          backgroundColor: "rgba(0, 0, 0, 0.125)",
          borderColor: "rgba(0, 0, 0, 0.125)",
          data: Object.keys(results).map(function(key, i) {
                 return Math.ceil(results[key].average);
               })
        },
        {
          label: "Your responses",
          backgroundColor: "rgba(0, 0, 255, 0.5)",
          borderColor: "rgba(0, 0, 255, 0.625)",
          data: Object.keys(results).map(function(key, i) {
            return Math.ceil(results[key].you);
          })
        },
      ],
    },
    options: {
      scale: {
        ticks: {
          maxTicksLimit: 6,
          display: false
        }
      }
    },
  };

  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <h1>Results</h1>
      <Radar data={radar.data} options={radar.options} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      {
        Object.keys(results).map(function(key, i) {
          return ( <Result vals={results[key]} key={i} /> )
        })
      }
    </CSSTransitionGroup>
  );
}

export default ResultsList;