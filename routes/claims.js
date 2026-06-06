// ============================================
// UniFind — Claims Routes
// ============================================

const express = require('express');
const router = express.Router();
const Claim = require('../models/Claim');

// POST /api/claims
router.post('/', async (req, res) => {
  try {
    const { itemId, itemTitle, claimerName, claimerEmail, message } = req.body;

    if (!itemId || !itemTitle || !claimerName || !claimerEmail || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields required',
      });
    }

    const claim = await Claim.create({
      itemId,
      itemTitle,
      claimerName,
      claimerEmail,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Claim submitted!',
      data: claim,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

// GET /api/claims — sab claims lao
router.get('/', async (req, res) => {
  try {
    const claims = await Claim.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: claims.length,
      data: claims,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

// PUT /api/claims/:id — approve ya reject karo
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const claim = await Claim.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!claim) {
      return res.status(404).json({
        success: false,
        message: 'Claim not found',
      });
    }

    res.status(200).json({
      success: true,
      message: `Claim ${status}!`,
      data: claim,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

module.exports = router;
