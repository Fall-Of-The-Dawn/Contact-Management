import express from 'express';
import {findContacts, addContact} from '../controller/usersContact.controller.js';

const router = express.Router();

router.get('/findContacts', findContacts);

router.post('/addContact', addContact);



export default router;