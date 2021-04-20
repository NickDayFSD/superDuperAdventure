const params = new URLSearchParams(window.location.search);
import { quests } from './data.js';
import { setUser, getUser } from '../local-storage-utils.js';
import { findById } from '../utils.js';

const section = document.querySelector('section');
const user = getUser();


