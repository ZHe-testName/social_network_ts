import {v1} from 'uuid';
// import { DispatchActionPropsType } from '../App';

// import {dialogsReducer} from './reducers/dialogs-reducer';
// import {navbarReducer} from './reducers/navbar-reducer';
// import {profileReducer} from './reducers/profile-reducer';

const store =  {
  _state: {
    profilePage: {
      mainUser: {
        name: 'Zheka',
        surname: 'Khorunzhyi',
        mainUserAvaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
      },
      posts: [
        {text: 'Blablabla my post yo!', likes: 21, dislikes: 10, id: v1()},
        {text: 'Another post, yeh!', likes: 51, dislikes: 69, id: v1()},
        {text: 'What a hell, what is the butifful post?', likes: 121, dislikes: 0, id: v1()},
        {text: 'Stupid post', likes: 21, dislikes: 1110, id: v1()},
        {text: 'Best ever post', likes: 2121, dislikes: 110, id: v1()},
      ],
      newPostText: '',
    },

    dialogsPage: {
      users: [
        {
          href: '/dialogs/vasya', 
          description: 'Vasya', 
          online: true, 
          selected: false,
          avaUrl: 'http://s020.radikal.ru/i706/1501/36/75ac2f1e2bca.jpg',
          messageArr: [],
        },
        {
          href: '/dialogs/masha', 
          description: 'Masha', 
          online: true,
          selected: false,
          avaUrl: 'http://avatar-lotos.at.ua/_si/0/90042470.jpg',
          messageArr: [],
        },
        {
          href: '/dialogs/vietal', 
          description: 'Vietal', 
          online: false,
          selected: false,
          avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzgUvXLnRImezj5_MMmqHF3aJHbp4vq86Yw&usqp=CAU',
          messageArr: [],
        },
        {
          href: '/dialogs/somya', 
          description: 'Sonya', 
          online: false,
          selected: false,
          avaUrl: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg',
          messageArr: [],
        },
        {
          href: '/dialogs/lena', 
          description: 'Lena', 
          online: true,
          selected: true,
          avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeoq1yV8_WeZRPOy6tvqvBdbl6SAOgNXeWA&usqp=CAU',
          // messageArr: [
          //   {message: 'Hello!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', isUser: true},
          //   {message: 'Yoy!)!', isUser: true},
          //   {message: 'You are here!)', isUser: true},
          //   {message: 'Hey!', isUser: false},
          //   {message: 'Yes, WTF?', isUser: false},
          // ],
        },
      ],
      messages: [
        {  
          id: v1(),
          messageTxt: 'Hello!)', 
          isUser: true,
          avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
        },
        {  
          id: v1(),
          messageTxt: 'Yo!)', 
          isUser: true, 
          avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
        },
        {  
          id: v1(),
          messageTxt: 'You are here!)',
          isUser: true, 
          avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
        },
        {  
          id: v1(),
          messageTxt: 'Hey, yes WTF?',
          isUser: false, 
          avaUrl: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg',
        },
        { 
          id: v1(), 
          messageTxt: 'I wona ask you about some little things of our feature trip... ', 
          isUser: true, 
          avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
        },
        {  
          id: v1(),
          messageTxt: 'When? Where? How Much?)',
          isUser: true, 
          avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
        },
        {  
          id: v1(),
          messageTxt: 'Damn..! I drop all ditails to your email 2 days ago...',
          isUser: false, 
          avaUrl: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg',
        },
        {  
          id: v1(),
          messageTxt: 'Ooopss...) Thanks, see your, sis!))',
          isUser: true, 
          avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
        },
      ],
      newMessageText: '',
    },

    navBar: {
      links: [
        {href: '/dialogs', description: 'Messages'},
        {href: '/users', description: 'Users'},
        {href: '/news', description: 'News'},
        {href: '/settimgs', description: 'Settings'},
        {href: '/profile', description: 'Profile'},
        {href: '/music', description: 'Music'},
      ],
      friendsArr: [
        { avatar: 'http://s020.radikal.ru/i706/1501/36/75ac2f1e2bca.jpg', 
          name: 'Vasya', 
          href: '/vasya',
        },
    
        { avatar: 'http://avatar-lotos.at.ua/_si/0/90042470.jpg',
          name: 'Masha',
          href: '/masha',
        },
    
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzgUvXLnRImezj5_MMmqHF3aJHbp4vq86Yw&usqp=CAU', 
          name: 'Sanya', 
          href: '/vietal',
        },
    
        { avatar: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg', 
          name: 'Sonya',
          href: '/sonya',
        },
    
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeoq1yV8_WeZRPOy6tvqvBdbl6SAOgNXeWA&usqp=CAU', 
          name: 'Lena', 
          href: '/lena',
        },
      ],
    },    
  },

  _callSubscriber(){

  },

  
  getState(){
    return this._state;
  },

  subscribe(observerFunc: () => void){
    this._callSubscriber = observerFunc;
  },

  // dispatch(action: DispatchActionPropsType){
  //   // this._state.profilePage = profileReducer(this._state.profilePage, action);
  //   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  //   this._state.navBar = navbarReducer(this._state.navBar, action);
  //   this._callSubscriber();
  // },
};

export default store;