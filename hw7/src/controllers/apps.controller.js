import * as appsService from "../services/app.service.js";

export const getAppController = async (req, res) => {
  const result = await appsService.getApps();

  res.json(result);
};

export const addAppController = async(req, res)=> {
    const result = await categoriesService.addApp(req.body); // throw new Error()

    res.status(201).json(result);
}