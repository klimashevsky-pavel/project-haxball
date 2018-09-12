import * as React from 'react';
import { Link } from 'react-router-dom';
import { INavigationTabConfig } from 'client/constants/NavigationTabsConfig';

import './navigation.css';

interface INavigationItemProps {
    options: INavigationTabConfig;
}

class NavigationItem extends React.Component<INavigationItemProps> {

    public render() {
        const { options: { name, route } } = this.props;
        return (
            <div className="navigation-item" >
                <Link to={route} >{name}</Link>
            </div>
        );
    }
}

export default NavigationItem;
