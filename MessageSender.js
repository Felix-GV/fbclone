import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideoCameraIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [imageURL, setImageURL] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        // db stuff
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL,
        })

        setInput('')
        setImageURL('')
    };



  return (
      <div className='messageSender'>
        <div className='messageSender__header'>
            <Avatar src={user.photoURL}/>
            <form>
                <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                className='messageSender__input'
                type="text" 
                placeholder={`What's on your mind?, ${user.displayName}`} 
                />
                <input 
                value={imageURL}
                onChange={e => setImageURL(e.target.value)}
                type="text"
                placeholder='image URL (Optional)'
                />
                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>
            </form>
        </div>
        <div className='messageSender__bottom'>
            <div className='messengerSender__option'>
                <VideoCameraIcon style={{ color: 'red' }}/>
                <h3>Live Video</h3>
            </div> 
            <div className='messengerSender__option'>
                <PhotoLibraryIcon style={{ color: 'green' }}/>
                <h3>Photo/Video</h3>
            </div> 
            <div className='messengerSender__option'>
                <InsertEmoticonIcon style={{ color: 'yellow '}}/>
                <h3>Feeling/Activity</h3> 
            </div> 
        </div>
      </div>
  );
}

export default MessageSender;
