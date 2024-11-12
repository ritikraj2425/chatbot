const { Users } = require('../Schemas/schemas');

const UpdateUserRoutes = {
    path: "",
    routes: [
        {
            method: "put",
            path: "/updateName",
            handler: async (req, res) => {
                const { email, newName } = req.body;

                if (!email || !newName) {
                    res.status(400).send({ message: "Email and new name are required" });
                    return;
                }

                try {
                    const user = await Users.findOne({ email });
                    if (!user) {
                        res.status(404).send({ message: "User not found" });
                        return;
                    }

                    user.name = newName;
                    await user.save();

                    res.status(200).send({ message: "Name updated successfully", user });
                } catch (e) {
                    res.status(500).send({ message: "Something went wrong" });
                }
            }
        }
    ]
};

module.exports = UpdateUserRoutes;
