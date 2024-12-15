const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async(req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startWith("Bearer")) {
        try {
                token = req.headers.authorization.split(" ")[1]
                const decodedToken = just.verify(token, process.JWT_SECRET);
                request.user = await User.findById(decodedToken.id).select("-password");
                next();
            }
        catch (err) {
            console.log(err);
        }
    }
    if(!token) {
        res.status(401);
        throw new Error("Not authorized!");
    }

});

module.exports = protect;