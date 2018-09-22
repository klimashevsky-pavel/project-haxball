import * as _ from 'lodash';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as mt from 'client/constants/ModalTypes';
import NavigationItem from 'client/components/navigation/NavigationItem';
import { NavigationTabConfig } from 'client/constants/NavigationTabsConfig';
import Modal from 'client/components/modal/Modal';

interface IHeaderState {
    isModalOpened: boolean;
    modalType: string;
}

class Header extends React.Component<RouteComponentProps<{}>, IHeaderState> {
    constructor(props?: RouteComponentProps<{}>) {
        super(props);
        this.state = {
            isModalOpened: false,
            modalType: mt.SIGN_UP_MODAL
        };
    }

    public openSignInModal = modalType => () => {
        this.setState({ isModalOpened: true, modalType });
    }

    public renderUnauthorizedHeader = () => (
        <>
            <span
                className="header-auth__link"
                onClick={this.openSignInModal(mt.SIGN_IN_MODAL)}
            >
                Sign in
            </span>
            <span>or</span>
            <span
                className="header-auth__link"
                onClick={this.openSignInModal(mt.SIGN_UP_MODAL)}
            >
                Sign up
            </span>
        </>
    )

    public onCloseModal = () => {
        this.setState({ isModalOpened: false });
    }

    public render() {
        const { isModalOpened, modalType } = this.state;
        const currentPath = _.get(this, 'props.location.pathname', '');
        return (
            <div className="header">
                <div className="header-title">
                    <span>HaxBall</span>
                    <span className="header-title__ball" />
                </div>
                <div className="navigation-panel">
                    {NavigationTabConfig.map((tab, index) => (
                        <NavigationItem
                            key={index}
                            options={tab}
                            isActive={tab.route === currentPath}
                        />
                    ))}
                </div>
                <div className="header-auth">
                    {this.renderUnauthorizedHeader()}
                </div>
                {isModalOpened ? (
                    <Modal
                        modalType={modalType}
                        onCloseModal={this.onCloseModal}
                    />
                ) : null}
            </div>
        );
    }
}

export default Header;
