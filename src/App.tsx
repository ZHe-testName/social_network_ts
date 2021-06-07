import './App.css';
import {Route} from 'react-router-dom';

import Dialogs from './components/dialogs';
import Header from './components/header';
import Music from './components/musik';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Settings from './components/settings';
import News from './components/news';

import store from './redux/bll';

type MessageType = {
  message: string,
  isUser: boolean,
};

type LinkType = {
  href: string,
  description: string,
};

type MainUserType = {
  name: string,
  surname: string,
  mainUserAvaUrl: string,
  newPostText: string,
  newMessageText: string,
};

type FriendsCardsType = {
  avatar?: string,
  name: string,
  href: string,
};

type DialogsUsersType = {
  href: string,
  description: string,
  online: boolean,
  selected: boolean,
  avaUrl: string,
  messageArr: Array <MessageType>,
};

type PostsType = {
  text: string,
  likes: number,
  dislikes: number,
  id: string,
};

type TestMessageType = {
  messageTxt: string, 
  isUser: boolean,
  avaUrl: string,
  id: string,
};

type AppPropsType = {
  _state: {
    mainUser: MainUserType,
    usersConversation: Array <DialogsUsersType>,
    navLinks: Array<LinkType>,
    myPosts: Array<PostsType>,
    friendsAvatarCards: Array<FriendsCardsType>,
    testMessagesArr: Array<TestMessageType>,
  },
  
  getState: () => {
    mainUser: MainUserType,
    usersConversation: Array <DialogsUsersType>,
    navLinks: Array<LinkType>,
    myPosts: Array<PostsType>,
    friendsAvatarCards: Array<FriendsCardsType>,
    testMessagesArr: Array<TestMessageType>,
  },
};

function App(props: AppPropsType) {
  const dispatch = store.dispatch.bind(store);

    const {
            mainUser,
            navLinks, 
            usersConversation, 
            myPosts,
            testMessagesArr, 
            friendsAvatarCards,} = props.getState();

  return (
      <div id='app' className='app-wrapper'>
        <Header/>
        <Navbar {...{links: navLinks, friendsArr: friendsAvatarCards}}/>

        <div className="main-content">
          <Route path="/dialogs" render={() => <Dialogs
                                                      messages={testMessagesArr} 
                                                      mainUser={mainUser} 
                                                      users={usersConversation} 
                                                      dispatch={dispatch}/>}/>
          <Route path="/news" component={News}/>
          <Route path="/settimgs" component={Settings}/>
          <Route path="/profile" render={() => <Profile 
                                                      mainUser={mainUser}   
                                                      posts={myPosts} 
                                                      dispatch={dispatch}/>}/>
          <Route path="/music" component={Music}/>
        </div>
      </div>
  );
}


export default App;
