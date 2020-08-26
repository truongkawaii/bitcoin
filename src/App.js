// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './App.css';
import './assets/css/main.css';
import 'antd/dist/antd.css';
// eslint-disable-next-line no-unused-vars
import Menu from './components/menu/Menu';
// eslint-disable-next-line no-unused-vars
import Table from '../src/components/table/table';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Spin, Space } from 'antd';
// eslint-disable-next-line no-unused-vars
import DropSelect from './components/DropSelect/DropSelect';
import { PER_1h, PER_24h, PER_7d } from './constants/constant';

function App() {

  const dataList = useSelector(state => state.dataCurrency.data);
  const valCurrency = useSelector(state => state.valCurrency.data);

  const [state, setState] = useState('market_cap_desc');
  const query = {
    vs_currency: valCurrency,
    order: state,
    per_page: 100,
    page: 1,
    sparkline: false,
    price_change_percentage: [PER_1h, PER_24h, PER_7d]
  };

  // E truyền vào query rồi lấy ra data 
  // RỒi ktra nếu 2 cái bị thay đổi thì sẽ call lại data 

  const handlerDataChange = (e) => {
    console.log('HELO');
    setState(e);
  };
  // SPINNER LOADING

  return (
    <div className="App">
      <Menu />
      <h1 className="title">Top 100 Coins by Market Capitalization</h1>
      <div className="container">
        <DropSelect />

        <Table
          order={state}
          handlerData={handlerDataChange}
          dataList={dataList} currency={valCurrency}
          query={query} />


      </div>
    </div>
  );
}

export default App;
