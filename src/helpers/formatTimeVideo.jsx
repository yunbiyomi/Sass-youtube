const formatTimeVideo = str => {
  if (!str.startsWith('PT')) {
    return null;
  }

  const time = str.substring(2);
  const hours = time.includes('H') ? parseInt(time.split('H')[0]) : 0;
  const minutes = time.includes('M') ? parseInt(time.split('M')[0].split('T').pop()) : 0;
  const seconds = time.includes('S') ? parseInt(time.split('S')[0].split('M').pop()) : 0;

  return `${hours.toString()}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default formatTimeVideo;