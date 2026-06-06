// ============================================
// UniFind — Messages Routes
// ============================================

const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET /api/messages/:itemId
router.get('/:itemId', async (req, res) => {
  try {
    const messages = await Message.find({ itemId: req.params.itemId }).sort({
      createdAt: 1,
    });

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

// POST /api/messages — naya message save karo
router.post('/', async (req, res) => {
  try {
    const { itemId, sender, text, type } = req.body;

    if (!itemId || !sender || !text || !type) {
      return res.status(400).json({
        success: false,
        message: 'All fields required',
      });
    }

    const message = await Message.create({ itemId, sender, text, type });

    res.status(201).json({
      success: true,
      data: message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

module.exports = router;
