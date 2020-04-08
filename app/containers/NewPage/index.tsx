/*
 *
 * NewPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectNewPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  newPage: makeSelectNewPage(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NewPage(props: Props) {
  useInjectReducer({ key: 'newPage', reducer: reducer });
  useInjectSaga({ key: 'newPage', saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { newPage } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default NewPage;
