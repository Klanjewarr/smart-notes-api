const express = require('express');
const router = express.Router();
const {
  getAllNotes,
  getNoteById,  // 👈 Add this line
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/notesController');

router.get('/', getAllNotes);
router.get('/:id', getNoteById); // 👈 Add this route
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
