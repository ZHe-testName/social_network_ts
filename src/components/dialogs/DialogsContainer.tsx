import {addSendMessageCreator, InitialStateType} from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { withAuthReadirect } from '../../hoc/withAuthedirect';
import React from 'react';

type MapStateToProps = InitialStateType;

type MapDispatchPropsType = {
    sendMessageHandler: (text: string) => void,
};

export type DialogsPropsType = MapStateToProps & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessageHandler: (text: string) => {
            dispatch(addSendMessageCreator(text))
        },
    };
};

const DialogsContainer = compose<React.ComponentType>(
                                    connect(mapStateToProps, mapDispatchToProps),
                                    withAuthReadirect,
                                )(Dialogs);

// const DialogsContainer = withAuthReadirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;