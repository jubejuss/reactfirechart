# How to

We are creating React ap and then npm installing Chartjs plugin and configuring it.

**_ What we do: _**

- Adding React
- Adding Chartjs
- Adding Firebase
- Adding Tailwind
- Sorting data
- Form validation

## Install ready app

Git clone and npm install

## Step by step

### Initial setup

- `npx create-react-app my-app`  
   (if needed, then `npx create-react-app@5.0.0 my-app`)  
   but there where problem with 5.0.0
  **_ IT WORKS at the moment ONLY WITH: _** `npm install --save react-chartjs-2@2.10.0 chart.js@2.9.4`
- cd to the directory and `npm run start`to see your react installation
- delete all files in src folder, exept App.css, App.js, reportWebVitals and index.js
- Leave in index.js only this:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- Remove entire component in App.js, leave only:

```javascript
import './App.css';
```

Now add:

```javascript
import './App.css';

const App = () => {
  return <div>Hello world</div>;
};

export default App;
```

And we are set up React environment and ready for action

### Let's create chart component

- create component folder `src/components`and `Chart.js`into it and into that file:

```javascript
import React from 'react';

const Chart = () => {
  return <div>Chart</div>;
};

export default Chart;
```

- Next, let's go to the `App.js` and import our component:

```javascript
import Chart from './components/Chart';
import './App.css';

const App = () => {
  return (
    <div>
      <Chart />
    </div>
  );
};

export default App;
```

- In Chart.js file import it `import {} from 'react-chartjs-2';`
- Fetch data from firebase:

```javascript
const Chart = () => {

  let labelsArray = [];
  let vaxArray = [];
  let unVaxArray = [];
  let unKnownArray = [];

  db.collection('inputs')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        let item = doc.data();

        let date = item.date;
        labelsArray.push(date);

        let vax = item.vax;
        vaxArray.push(vax);

        let unVax = item.unVax;
        unVaxArray.push(unVax);

        let unKnown = item.unKnown;
        unKnownArray.push(unKnown);
      });
    });
```

- Configure chart
  We can choose te chart type in curly braces if fo push ctrl+space  
   Let's also choose chart size and filling chart with sample data.  
  [Chartjs](https://www.chartjs.org/docs/latest/getting-started/usage.html)

- Use defaults
  add `default`to import like so `import { Line } from 'react-chartjs-2';`
  and make changes in: `defaults.global.legend.position = 'bottom';`

Thanks to https://www.youtube.com/watch?v=c_9c5zkfQ3Y and https://www.youtube.com/watch?v=Ge6PQkpa6pA

- To sort by date, add to Chart.js line 16: `.orderBy('date')`

### Add Tailwind

https://tailwindcss.com/docs/guides/create-react-app

- Install Tailwind form plugin for better styling
  https://github.com/tailwindlabs/tailwindcss-forms

### Add form validation

in input.js, after `e.preventDefault();` add if operation:

```javascript
e.preventDefault();
    const fieldDate = document.querySelector('.date');
    const fieldVax = document.querySelector('.vax');
    const fieldUnVax = document.querySelector('.unvax');
    const fieldUnKnown = document.querySelector('.unknown ');
    const validDate = fieldDate.value;
    const validVax = fieldVax.value;
    const validUnVax = fieldUnVax.value;
    const validUnKnown = fieldUnKnown.value;
    if (!validDate || !validVax || !validUnVax || !validUnKnown) {
      alert('Mõni väljadest on tühi');
    } else {
```

https://unclebigbay.com/react-form-validation-without-state-and-third-party-packages

## Dealing with Realtime Firebase

https://www.youtube.com/watch?v=kpNgSwoReWc
