export const getMeta = metaName => {
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }
  return '';
};

export const toMMMDDYYY = date => {
  try {
    const parsedDate = new Date(date);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return `${
      months[parsedDate.getMonth()]
    } ${parsedDate?.getDate()}, ${parsedDate?.getFullYear()}`;
  } catch (e) {
    return date;
  }
};

export const toHHMMSS = date => {
  try {
    const parsedDate = new Date(date);
    return `${parsedDate?.getHours()}:${parsedDate?.getMinutes()}:${parsedDate?.getSeconds()}`;
  } catch (e) {
    return date;
  }
};
