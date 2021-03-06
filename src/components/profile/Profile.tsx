import classes from  './profile.module.css';
import Avatar from '../avatar';
import MyPostsContainer from './my-posts/MyPostsContainer';
import { ProfileUserType } from '../../redux/reducers/profile-reducer';
import Preloader from '../preloader/Preloader';
import userPhoto from '../../imgs/images.png';
import ProfileStatusFunctional from './profile-status/ProfileStatusFunctional';
import avatar from '../../imgs/my_avatar.jpg';
import { useRef } from 'react';

export type MainUserType = {
  name: string,
  surname: string,
  mainUserAvaUrl: string,
};

export type PostsType = {
  text: string,
  likes: number,
  dislikes: number,
  id: string,
};

export type ProfilePageType = {
  user: ProfileUserType,
  updateStatus: (status: string) => void,
  putPhoto: (ava: any) => void,
};


function Profile(props: ProfilePageType) {
  const img = useRef(null);
  //сделать увеличение избрпжения баннера рофиля
    const {user} = props;

    if (!user) {
      return (
        <Preloader />
      );
    }
    
    // if (!isAuth) return <Redirect to='/login'/>;
    const sendPhoto = () => {
      const ava = 'https://etocsdetka.ru/wp-content/uploads/photo-gallery/Gaydii/Steam/krutie/krutaia-ava-etocsdetka_(1).jpg';

      props.putPhoto(ava);
    };

    const onChangeHandler = (e: any) => {
      console.dir(img.current);
    };

    return (
        <main className={classes.profile}>
        <div className={classes.banner}></div>
          <input type="file" ref={img} onChange={e => onChangeHandler(e)}/>

          <button>Download</button>
      

        {/* <button onClick={sendPhoto}>
          Send photo
        </button> */}

        <div className={classes.account}>
          <Avatar settings={{className: classes.avatar, 
                              imgUrl: user.photos.small || 
                                      user.photos.large ||
                                      userPhoto}}/>

          <div className={classes.description}>

            <span className={classes.username}>
              {`${user.fullName}`}
            </span>

            <div className={classes.extraInfo}>
              <div className="job">
                <span className="lookinAJob">Looking for a job: </span>
                <span className="res">{user.lookingForAJob ? 'YES' : 'NO'}</span>
              </div>

              <div className="status">
                <span className="city">Status: </span>
                {/* <ProfileStatus 
                            titleStatus={user.status} 
                            updateStatus={props.updateStatus}/> */}
                <ProfileStatusFunctional 
                                      titleStatus={user.status} 
                                      updateStatus={props.updateStatus}/>
              </div>

              {/* <div className="education">
                <span className="eduq">Education: </span>
                <span className="user-eduq">VNTU IEEAS</span>
              </div> */}

              <div className="wedsite">
                <span className="web">Contacts: </span>

                <div className={classes.contactsList}>
                  {Object.entries(user.contacts)
                      .map((el, i) => {
                        return(
                          <a href={el[1] ? el[1] : '#'}
                              key={i}
                              className={el[1] ? classes.linkstyle : classes.disabled}>
                            {el[0]}
                          </a>
                        )
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <MyPostsContainer />
      </main>
    );
};

export default Profile;