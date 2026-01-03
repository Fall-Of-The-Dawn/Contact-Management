import express from 'express';
import {findContacts, addContact, updateContact} from '../controller/usersContact.controller.js';

const router = express.Router();

router.get('/findContacts', findContacts);

router.post('/addContact', addContact);


router.post("/updateContact", updateContact);

export default router;