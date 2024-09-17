const hello = (req, res) => {
    res.send(`Hello!... ${req.query.id} ${JSON.stringify(req.headers)} // ${req.headers}`);

};

module.exports = {
    hello
}