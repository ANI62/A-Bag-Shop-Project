const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owners-model");

// Middleware to parse JSON request bodies
router.use(express.json());

router.get('/', (req, res) => {
    res.send("Kya bhai kaise ho");
});

console.log(process.env.NODE_ENV);

// Correct environment variable check
if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
        try {
            let owners = await ownerModel.find();
            if (owners.length > 0) {
                return res.status(500).send("You don't have permission to create");
            }
            
            // Destructuring req.body to get necessary fields
            let { fullname, email, password, gstin } = req.body;

            // Check if required fields are present
            if (!fullname || !email || !password || !gstin) {
                return res.status(400).send("All fields are required");
            }

            // Create new owner
           let createdOwner= await ownerModel.create({
                fullname,
                email,
                password,
                gstin
            });

            res.send("We can create a new owner");
        } catch (error) {
            res.status(500).send("An error occurred: " + error.message);
        }
    });
}

// Uncommented route example for other environments
router.post("/create", (req, res) => {
    res.send("Bhai chal raha hai");
});

module.exports = router;
