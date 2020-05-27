var express = require("express");
var router = express.Router();
var Post = require("../models/Post");

// console.log('Listener running');
// var completeButton = document.getElementById('completeButton');
// completeButton.add
async function completeButton(item) {
  console.log("intermittent function");
  var post = await Post.findOneAndDelete({ title: item });
}

//DELETE POSTS
router.post("/:item", async function (req, res) {
  try {
    var posts = await Post.distinct("title");
    const result = await Post.remove({ title: req.params.item }).exec();
    var posts = await Post.distinct("title");
    res.render("../views/index", { listItems: posts });
  } catch (error) {}
});

//SUBMIT POSTS
router.post("/", async function (req, res) {
  const post = new Post({
    title: req.body.title,
  });
  try {
    var savedPost = await post.save();
    var posts = await Post.distinct("title");
    res.render("../views/index", { listItems: posts });
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

//GET POSTS
router.get("/", async function (req, res) {
  try {
    var posts = await Post.distinct("title");
    res.render("../views/index", { listItems: posts });
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
