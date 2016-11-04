const Twitch = (state = {
  display: 'none',
  active: '',
  loader: false
}, action) => {
  switch (action.type) {
    case 'LOAD_STREAM':
      return {
        ...state,
        video: action.video,
        chat: action.chat,
        display: action.display,
        active: action.active
      }
    case 'LOAD_TWITCH':
      return {
        ...state,
        twitch: action.twitch
      }
    case 'LOAD_IMG':
      return {
        ...state,
        img: action.img,
        date: action.date,
        display: action.display
      }
    case 'LOADER_IMG':
      return {
        ...state,
        loader: action.loader
      }
    case 'VIDEO_RESIZE':
      return {
        ...state,
        windowWidth: action.windowWidth,
        windowHeight: action.windowHeight
      }
    default:
      return state
  }
}

export default Twitch
