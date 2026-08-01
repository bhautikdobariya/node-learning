const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentdb");

const userSchema = new mongoose.Schema({

    name:String,

    age:Number,

    email:String

});

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.                                                                                                     );
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.put("/users/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(user);
});

app.delete("/users/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});