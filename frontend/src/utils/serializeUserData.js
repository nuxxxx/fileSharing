import getUserAvatar from './getUserAvatar';

export default (items, options) => {
  return items && items.length ? items.map((item) => ({
    id: item.id,
    img: getUserAvatar(item), 
    text: item.userName,
    icon: options.active ? options.icon : options.inverseIcon,
    onIconClick: options.onIconClick
  })) : [];
}