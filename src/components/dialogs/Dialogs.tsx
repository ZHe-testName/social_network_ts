import React, {FocusEvent, MouseEvent} from 'react';

import {addSendMessageCreator, onChangeMessageCreator} from '../../redux/bll';

import classes from './dialogs.module.css';
import Conversation from './conversation';
import DialogsNav from './dalogs_nav';

type UsersType = {
    href: string,
    description: string,
    online: boolean,
    selected: boolean,
    avaUrl: string,
    messageArr: Array <MessageType>,
};

type MessageType = {
    message: string,
    isUser: boolean,
};

type MainUserType = {
    name: string,
    surname: string,
    mainUserAvaUrl: string,
    newPostText: string,
    newMessageText: string,
};

type TestMessageType = {
    messageTxt: string, 
    isUser: boolean,
    avaUrl: string,
    id: string,
};

type DispatchPropsType = {
    type: string,
    message?: string,
    id?: string,
    observerFunc?: () => void,
  };

type DialogsPropsType = {
    messages: Array<TestMessageType>,
    mainUser: MainUserType,
    users: Array <UsersType>,
    dispatch: (action: DispatchPropsType) => void,
};

function Dialogs(props: DialogsPropsType) {
    const {users, messages, mainUser, dispatch} = props;

    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const sendButton = React.createRef<HTMLButtonElement>();

    // const conversation = {...users.find(user => user.selected)};

    // const messagesArr = conversation ? conversation.messageArr : [];

    // const renderMessageArr = messagesArr?.map(messageObj => {
    //     return messageObj.isUser ? {avaUrl: mainUser.mainUserAvaUrl, ...messageObj} : 
    //                                 {avaUrl: conversation.avaUrl, ...messageObj};
    // });
    
    ////////////////////////////////////

    // conversation.messageArr?.push({})
    const sendMessageHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if (newMessageElement.current?.value){
            const messageTxt = newMessageElement.current.value;

            dispatch(addSendMessageCreator(messageTxt));

            e.currentTarget.classList.add(classes.send_message_button_on_click);
        }

    };

    const onBlurHandler = (e: FocusEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.remove(classes.send_message_button_on_click);
    };

    const onChangeHandler = () => {
        if (newMessageElement.current?.value){
            const messageTxt = newMessageElement.current.value;

            dispatch(onChangeMessageCreator(messageTxt));
        };
    };

    // const onEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     console.log(e);
    //     if (e.key === 'Enter'){
    //         console.log('sd');
    //     }
    // };
    return (
        <div className={classes.dialogs_wrap}>
            <h2 className={classes.dialogs_header}>Dialogs</h2>

            <nav className={classes.dialogs_nav}>
                <DialogsNav users={users}/>
            </nav>

            <div className={classes.dialogs_conversation_outside_box}>

                <div className={classes.dialogs_conversation}>
                    <Conversation messages={messages} />
                </div>

                <div className={classes.new_message_panel}>
                    <textarea   
                            value={mainUser.newMessageText}
                            ref={newMessageElement}
                            rows={1}
                            placeholder="Typing here..."
                            onChange={onChangeHandler}>

                    </textarea>

                    <div className={classes.send_button_gag}></div>

                    <button 
                            className={classes.send_message_button}
                            ref={sendButton}
                            onClick={sendMessageHandler}
                            onBlur={onBlurHandler}> Send </button>

                    {/* <div className={classes.send_button_wrap}>
                        
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Dialogs;