import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB, 'utf-8');
    const data = JSON.parse(buffer);
    return data;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
