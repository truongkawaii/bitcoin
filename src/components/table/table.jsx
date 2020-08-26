// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import RowItem from './RowItem/RowItem';
// eslint-disable-next-line no-unused-vars
import { Spin, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import RowTitle from './RowTitle/RowTitle';
import { Actions } from '../../state/actions';
function Table(props) {


  const { dataList } = props;
  let listData = null;
  const loadingCurency = useSelector(state => state.currency.loading);
  const [loading, setLoading] = useState(false);

  if (dataList) {
    listData = dataList.map((item, index) =>
      (
        <RowItem itemCurrency={props.currency} key={index} item={item} order={index + 1} />
      )
    );
  }
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch({ type: Actions.GET_DATA, payload: props.query });
    } catch (error) {
    }
    return () => {
      // setLoading(true);
    };

  }, [props.currency, props.order]);

  // SPINNER LOADING
  const spinner = (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  );

  return (
    <div>

      {dataList ?
        <table>
          <RowTitle changeData={props.handlerData} />
          {loading ? spinner : listData}
        </table>
        :
        spinner
      }
    </div>
  );
};


export default React.memo(Table);
