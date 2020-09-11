const router = require("express").Router();
const auth = require("../middleware/auth");
const Todo = require("../models/todoModel");

router.post("/", auth, async (req,res) => {
    try {
        const { title } = req.body;

        //validating
        if (!title) 
        return res.status(400).json({ msg: "Not all fields have been entered." })

        const newTodo = new Todo({
            title,
            userId: auth.user,
        });
        const savedTodo = await newTodo.save();
        res.json(savedTodo)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/all", auth, async (req, res) => {
    const todos = await Todo.find({ userId: req.user });
    res.json(todos)
});

router.delete("/:id", auth, async (req, res) => {
    const todo = await Todo.findOne({ userId: req.user, _id: req.params.id});
    if (!todo) 
        return res.status(400).json({ msg: "No To-Do found with ID that belongs to the current user." })
    const deletedTodo = await new Todo.findByIdAndDelete(req.params.id);
    res.json(this.deletedTodo)
} )

module.exports = router;