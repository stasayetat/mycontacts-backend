import {Request, Response, Router} from "express";
import {ContactController} from "../controllers/contact.controller";
export const router = Router();
const contactController = new ContactController();
router.get('/', contactController.getContact);

router.get('/:id', contactController.getOneContact);

router.post('/', contactController.createController);

router.put('/:id', contactController.updateOneContact);

router.delete('/:id', contactController.deleteOneContact);
