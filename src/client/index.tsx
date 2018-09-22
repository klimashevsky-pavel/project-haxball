import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from 'client/components/appContainer/AppContainer';

import 'client/styles/main.scss';

ReactDOM.render(<AppContainer />, document.getElementById('app'));
