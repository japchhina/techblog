const router = require('express').router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');
router.post('/', withAuth, async (req, res) => {
    try{
        const newComment = await Comment.create({
        })
    }
})
