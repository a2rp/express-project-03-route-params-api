const getUserById = (req, res) => {
    const { id } = req.params;

    res.json({
        id: id,
        name: `User ${id}`,
        message: `User data fetched successfully for id ${id}`,
    });
};

module.exports = {
    getUserById,
};
