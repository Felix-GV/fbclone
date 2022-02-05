import React from 'react';
import Story from './Story';
import './StoryReel.css'

function StoryReel() {
  return (
  <div className='storyReel'>
      <Story 
      image='https://swall.teahub.io/photos/small/106-1068152_cool-animal-plants-hd-backgrounds-data-src-cool.jpg'
      profileSrc='https://uploads.scratch.mit.edu/users/avatars/53859197.png'
      title='Filo1'
      />
      <Story 
      image='https://wallpaper.dog/large/999239.jpg'
      profileSrc='https://miro.medium.com/max/800/0*02LY3qATEenqVib9.png'
      title='Filo2'
      />
      <Story 
      image='https://images.unsplash.com/photo-1533085089891-244cb13369b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXNpZGV8ZW58MHx8MHx8&w=1000&q=80'
      profileSrc='https://i.pinimg.com/originals/63/4a/b0/634ab02b517720ff6ff1e8d9c1a90de3.jpg'
      title='Filo3'
      />
      <Story 
      image='https://www.enwallpaper.com/wp-content/uploads/Cool-Wallpapers-for-Phone.jpg'
      profileSrc='https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png'
      title='Filo4'
      />
      <Story 
      image='https://cdn1.cardly.net/card/1/073c732a-af65-03c3-00aa-95e72441f22b/page1-r2-i3962-11ff746384b46fd1c2f76f8e5fc870b9.webp/vp/detail-card/1200'
      profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3e9xvqeQwv7VMqWiN08JvOwG-w0RRDXXZQA&usqp=CAU'
      title='Filo5'
      />
  </div>
  );
}

export default StoryReel;
