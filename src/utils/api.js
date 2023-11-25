import axios from 'axios';

export async function getContributionList() {
  try {
    return axios.get('https://dpg.gg/test/calendar.json').then(res => res.data);
  } catch (error) {
    return [];
  }
}