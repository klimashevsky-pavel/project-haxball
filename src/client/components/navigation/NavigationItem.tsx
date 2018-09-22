import * as React from 'react';
import { Link } from 'react-router-dom';
import { INavigationTabConfig } from 'client/constants/NavigationTabsConfig';

interface INavigationItemProps {
    options: INavigationTabConfig;
    isActive: boolean;
}

class NavigationItem extends React.Component<INavigationItemProps> {

    public render() {
        const { options: { name, route }, isActive } = this.props;
        const className = isActive ? 'navigation-item active' : 'navigation-item';
        return (
            <Link className={className} to={route}>
                <span>{name}</span>
            </Link>
        );
    }
}

export default NavigationItem;
