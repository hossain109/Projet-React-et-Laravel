import React,{Fragment} from 'react'
import ReactDOM from 'react-dom/client';
import AppRoute from './route/appRoute';


export default function MainReact() {
  return (
    <Fragment>
     <AppRoute />
    </Fragment>
  )
}

const container = document.getElementById('root');

const main = ReactDOM.createRoot(container);

main.render(
<MainReact />
);