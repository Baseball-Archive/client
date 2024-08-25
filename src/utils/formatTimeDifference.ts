const formatTimeDifference = (dateString: string): string => {
  const createdAt = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - createdAt.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const diffInHours = Math.floor(diffInMs / 3600000);

  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else {
    return createdAt.toLocaleDateString();
  }
};

export default formatTimeDifference;
