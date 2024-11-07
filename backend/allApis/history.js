const { History } = require('../Schemas/schemas');

const historyRoutes = {
    path: "",
    routes: [
        {
            method: "post",
            path: "/history",
            handler: async (req, res) => {
                const { email, text } = req.body;

                if (!email || !text) {
                    res.status(400).send({ message: "All fields are required" });
                    return;
                }

                try {
                    const history = new History({ email, text });
                    await history.save();
                    res.status(200).send({ message: "Chat saved successfully" });
                } catch (e) {
                    console.log(e);
                    res.status(500).send({ message: "Something went wrong" });
                }
            }
        },
        {
            method: "get",
            path: "/history/:email",
            handler: async (req, res) => {
                const { email } = req.params;

                try {
                    const history = await History.find({ email: email });
                    res.status(200).send(history); 
                } catch (error) {
                    res.status(500).send({ message: "Error fetching chat history" });
                }
            }
        },
        {
            method: "delete",
            path: "/history/:email",
            handler: async (req, res) => {
                const { email } = req.params;

                try {
                    await History.deleteMany({ email: email });
                    res.status(200).send({ message: "Chat history deleted successfully" });
                } catch (e) {
                    res.status(500).send({ message: "Error deleting chat history" });
                }
            }
        },
        {
            method: "delete",
            path: "/history/:email/:id",
            handler: async (req, res) => {
                const { email, id } = req.params;

                try {
                    const result = await History.deleteOne({ email: email, _id: id });

                    if (result.deletedCount === 0) {
                        return res.status(404).send({ message: "Chat message not found" });
                    }

                    res.status(200).send({ message: "Chat message deleted successfully" });
                } catch (e) {
                    res.status(500).send({ message: "Error deleting chat message" });
                }
            }
        }
    ]
};

module.exports = historyRoutes;
