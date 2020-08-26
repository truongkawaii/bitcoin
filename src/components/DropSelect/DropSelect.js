// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../state/actions';
import { getValCurrency } from '../../state/actions/table.action';

const DropSelect = () => {

  const dispatch = useDispatch();
  const dataListCurrency = useSelector(state => state.currency.data);

  useEffect(() => {
    dispatch({ type: Actions.GET_DATA_CURRENCY });
  }, []);

  let arr = [];
  if (dataListCurrency) {
    arr = dataListCurrency.map(item => (<option value={item} key={item}>{item}</option>));
  }

  return (
    <select className="drop-select"
      onChange={(e) => {
        e.persist();
        dispatch(getValCurrency(e.target.value));
      }}
    >
      {
        dataListCurrency ?
          arr
          :
          null
      }
    </select >
  );
};

export default DropSelect;
