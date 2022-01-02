import { db } from '../firebase'; // Step 1: import firebase
import { defaults } from 'chart.js'; // it is needable when we want make some defaults
import React from 'react';
import { Line } from 'react-chartjs-2';

defaults.global.legend.position = 'bottom';

const Chart = () => {
  // fetchdata
  let labelsArray = [];
  let vaxArray = []; //Step 3: Add different datasets
  let unVaxArray = [];
  let unKnownArray = [];

  db.collection('inputs')
    .orderBy('date')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        let item = doc.data();

        let date = item.date; // Step 4: add all needable sets of data
        labelsArray.push(date);

        let vax = item.vax;
        vaxArray.push(vax);

        let unVax = item.unVax;
        unVaxArray.push(unVax);

        let unKnown = item.unKnown;
        unKnownArray.push(unKnown);
      });
    });

  return (
    <div>
      <Line
        data={{
          labels: labelsArray, // Step 2: rename to labelsArray
          datasets: [
            // Step 5: Add all datasets
            {
              label: 'Vaktsineeritud',
              data: vaxArray,
              backgroundColor: 'rgba(0, 179, 25, 0.2)',
              borderColor: 'rgba(0, 179, 25, 1)',
            },
            {
              label: 'Vaktsineerimata',
              data: unVaxArray,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
            },
            {
              label: 'Teadmata',
              data: unKnownArray,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 22,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
