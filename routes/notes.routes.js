const express = require('express');
const router = express.Router();

const notesController = require('../controller/notes.controller');


// checking if it works
router.get('/test', notesController.test);

router.post('/create', notesController.noteCreate);

// router.get('/:id/:noteId', notesController.noteRetrieve);

router.post('/update', notesController.noteUpdate);

router.post('/delete', notesController.noteDelete);

router.post('/archive', notesController.noteArchive);

router.post('/unArchive', notesController.noteUnArchive);

router.post('/unArchivedList', notesController.noteUnArchivedList);

router.post('/archivedList', notesController.noteArchivedList);

module.exports = router;