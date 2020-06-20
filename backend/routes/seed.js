const express = require('express');
const logger = require('../utils/logger');
const userData = require('../utils/seeds/user.feed');
const projectData = require('../utils/seeds/project.feed');

const router = express.Router();
const { User: userModel } = require('../models/user.model');
const { Project: projectModel } = require('../models/project.model');

const createCollection = (model, documents) => {
  return new Promise((resolve) => {
    return model.insertMany(documents).then(() => {
      return model.find((err, docs) => {
        logger.debug(docs);
        return resolve(docs);
      });
    });
  });
};

const dropCollection = (model) => {
  return new Promise((resolve, reject) => {
    model.deleteMany({}, (err) => {
      resolve();
      if (err) reject();
    });
  });
};

router.get('/users', async (req, res) => {
  try {
    await dropCollection(userModel);
    const createdUsers = await createCollection(userModel, userData);
    res.send(createdUsers);
  } catch (e) {
    res.send(`fail to seed users ${e}`);
  }
});

router.get('/projects', async (req, res) => {
  try {
    const projects = projectData;
    await dropCollection(projectModel);
    const createdProjects = await createCollection(projectModel, projects);
    res.send(createdProjects);
  } catch (e) {
    throw new Error('fail to seed projects');
  }
});

module.exports = router;
