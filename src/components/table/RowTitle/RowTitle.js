// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { MARKET_CAP_DESC, VOLUME_ASC, VOLUME_DESC, GECKO_ASC, GECKO_DESC } from '../../../constants/constant';

const RowTitle = (props) => {

  // const dispatch = useDispatch();

  let arr = [
    '#', 'Coin', 'Price',
    '1h', '24h', '7d', '24h Volume',
    'Mkt Cap'
  ];

  let arr2 = [
    '', '', '',
    '', '', '',
    VOLUME_DESC, MARKET_CAP_DESC
  ];

  let listHeader = arr.map((item, index) => (
    <td key={index} className="item-header" onClick={() => props.changeData(arr2[index])}>
      {item} <span className="drop-down"><i className="fas fa-caret-down"></i></span>
    </td>
  ));

  return (
    <thead className="list-row-item listHeader">
      {listHeader}
    </thead>
  );
};

export default RowTitle;
