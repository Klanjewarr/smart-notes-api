const notes = require('../data/notes');

// Get all notes
exports.getAllNotes = (req, res) => {
  res.json(notes);
};

// Create a new note
exports.createNote = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const newNote = {
    id: Date.now(), // unique ID
    title,
    content
  };

  notes.push(newNote);
  res.status(201).json(newNote);
};

// Update a note
exports.updateNote = (req, res) => {
  const noteId = parseInt(req.params.id);
  const { title, content } = req.body;

  const note = notes.find(n => n.id === noteId);
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  note.title = title || note.title;
  note.content = content || note.content;

  res.json(note);
};

// Delete a note
exports.deleteNote = (req, res) => {
  const noteId = parseInt(req.params.id);
  const index = notes.findIndex(n => n.id === noteId);

  if (index === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }

  notes.splice(index, 1);
  res.json({ message: 'Note deleted' });
};
// Get one note by ID
exports.getNoteById = (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find(n => n.id === noteId);

  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  res.json(note);
};
