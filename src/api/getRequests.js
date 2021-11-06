import { MAIN_API_URL } from '../common/constants';

export const getDetails = async (repoName) => {
  const res = await fetch(`${MAIN_API_URL}${repoName}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const fullData = await res.json();
  const result = {
    full_name: fullData.full_name,
    description: fullData.description,
    stargazers_count: fullData.stargazers_count,
  };
  return result;
};
