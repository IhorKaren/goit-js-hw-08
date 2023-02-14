import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));