
import {showError} from './error.js';


async function callApiAs(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    return data;
  } catch (error) {
    showError();
    return null;
  }
}

export { callApiAs, showError };