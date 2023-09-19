
const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');

// Get all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new thought
router.post('/', async (req, res) => {
  const { text, user } = req.body;

  try {
    const thought = new Thought({ text, user });
    await thought.save();
    res.status(201).json(thought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add a reaction to a thought
router.post('/:id/reactions', async (req, res) => {
  const { id } = req.params;
  const { reaction } = req.body;

  try {
    const thought = await Thought.findById(id);

    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    thought.reactions.push(reaction);
    await thought.save();

    res.json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a thought
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const thought = await Thought.findById(id);

    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    await thought.remove();
    res.json({ message: 'Thought deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
