import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, undefined, 2);
    fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
