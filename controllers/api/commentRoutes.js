const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
      
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// Edit comments (PUT)
// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const commentsData = await Comments.update({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!commentsData) {
//       res.status(404).json({ message: "No comments found with this id!" });
//       return;
//     }

//     res.status(200).json(commentsData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Delete comments
// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const commentsData = await Comments.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!commentsData) {
//       res.status(404).json({ message: "No comments found with this id!" });
//       return;
//     }

//     res.status(200).json(commentsData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
