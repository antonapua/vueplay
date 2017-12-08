import Home from './/pages/Home'

const Portfolio = resolve => {
    require.ensure(['./components/portfolio/Portfolio'], () => {
      resolve(require('./components/portfolio/Portfolio'));
    });
};

const Stocks = resolve => {
    require.ensure(['./components/stocks/Stocks'], () => {
      resolve(require('./components/stocks/Stocks'));
    });
};

export const routes = [
  { path: '', component: Home},
  { path: '/portfolio', component: Portfolio},
  { path: '/stocks', component: Stocks},
  { path: '*', component: Home }
];
