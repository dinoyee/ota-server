module.exports = (req, res) => {
    const method = req.params.method
    res.json({
        method: method
    })
}