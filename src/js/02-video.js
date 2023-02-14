import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const currentTimeKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem(currentTimeKey, JSON.stringify(data.seconds));
}, 1000));

player.setCurrentTime(localStorage.getItem(currentTimeKey));