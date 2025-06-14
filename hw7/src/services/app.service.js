import App from "../db/App.js";

export const getApps = ()=> App.findAll();

export const addApp = payload => App.create(payload); // throw new Error()