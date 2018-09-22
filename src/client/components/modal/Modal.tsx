import * as React from 'react';
import * as sat from 'client/constants/ServerActions';
import * as mt from 'client/constants/ModalTypes';

const modalActionTypes = {
    [mt.SIGN_IN_MODAL]: sat.SIGN_IN,
    [mt.SIGN_UP_MODAL]: sat.SIGN_UP
};

interface IModalProps {
    modalType: string;
    onCloseModal: () => void;
}

export default class Modal extends React.Component<IModalProps> {
    public renderHeader() {
        const { modalType, onCloseModal } = this.props;
        return (
            <div className="modal-header">
                <div className="modal-header__title">
                    <span>{modalType}</span>
                </div>
                <div className="modal-header__close-button">
                    <span className="fa fa-times" onClick={onCloseModal} />
                </div>
            </div>
        );
    }

    public render() {
        return (
            <div className="modal">
                <div className="modal-window">{this.renderHeader()}</div>
            </div>
        );
    }
}
