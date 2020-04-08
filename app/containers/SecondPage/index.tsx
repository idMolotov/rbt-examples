/*
 *
 * SecondPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectSecondPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  secondPage: makeSelectSecondPage(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SecondPage(props: Props) {
  useInjectReducer({ key: 'secondPage', reducer: reducer });
  useInjectSaga({ key: 'secondPage', saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { secondPage } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default SecondPage;
