import * as React from 'react';
import NavigationItem from 'client/components/navigation/NavigationItem';
import { NavigationTabConfig } from 'client/constants/NavigationTabsConfig';

import './header.css';

class Header extends React.Component {

    public render() {
        return (
            NavigationTabConfig.map(tab => <NavigationItem options={tab} />)
        );
    }
}

export default Header;
