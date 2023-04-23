import express, {Express, json, Request, Response} from 'express';
import {config} from "dotenv";
import {ContactRoute} from "./routes/contact.route";
import {Container, inject, injectable} from "inversify";
import 'reflect-metadata';
import {TYPES} from "./types";
import {IContactController} from "./controllers/contact.controller.interface";
import {ContactController} from "./controllers/contact.controller";
import {App} from "./app";
import {IContactRoute} from "./routes/contact.route.interface";
config();
const myContainer = new Container();
myContainer.bind<IContactController>(TYPES.IContactController).to(ContactController);
myContainer.bind<IContactRoute>(TYPES.IContactRoute).to(ContactRoute);
myContainer.bind<App>(TYPES.App).to(App);

async function start(): Promise<void> {
    const app = myContainer.get<App>(TYPES.App);
    await app.startApp();
}
start();



