// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import * as KEY from '../../../constants/constant';
const RowItem = (props) => {
  const { item } = props;


  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: props.itemCurrency,
    minimumFractionDigits: 0
  });

  let percent_1h = parseFloat(item[KEY.PERCENT_1H]).toFixed(2);
  let percent_24h = parseFloat(item[KEY.PERCENT_24H]).toFixed(2);
  let percent_7d = parseFloat(item[KEY.PERCENT_7D]).toFixed(2);

  const arrItem = (
    <>
      <td className="item star"><span><i className="far fa-star"></i></span> {item[KEY.MARKET_RANK]}</td>

      <td className="item logo"> <div className="item-small"> <img src={item[KEY.IMAGE]} /> <h3>{item['name']}</h3></div> <h5 className="upcase">{item[KEY.SYMBOL]}</h5> </td>
      <td className="item">{formatter.format(item[KEY.PRICE])}</td>
      {item[KEY.PERCENT_1H] > 0 ?
        <td className="item green-num">{percent_1h}%</td>
        :
        <td className="item red-num">{isNaN(percent_1h) ? `--` : `${percent_1h}%`}</td>
      }
      {item[KEY.PERCENT_24H] > 0 ?
        <td className="item green-num">{percent_24h}%</td>
        :
        <td className="item red-num">{isNaN(percent_24h) ? `--` : `${percent_24h}%`}</td>
      }
      {item[KEY.PERCENT_7D] > 0 ?
        <td className="item green-num">{percent_7d}%</td>
        :
        <td className="item red-num">{isNaN(percent_7d) ? `--` : `${percent_7d}%`}</td>
      }
      <td className="item">{formatter.format(item[KEY.VOLUME])}</td>
      <td className="item">{formatter.format(item[KEY.MKT_CAP])}</td>
    </>
  );
  return (

    <tr className="list-row-item">
      {arrItem}
    </tr>

  );
};

export default RowItem;
