
//register controller
async function register (res,req){
    const {} = req.body;
} try {
    // logic handling
} catch (error) {
   
    return res.status(400).json({message: "Something went wrong"})
}  




// Login controller
async function login (res,req){
    const {} = req.body;
} try {
    // logic handling
} catch (error) {
   
    return res.status(400).json({message: "Something went wrong"})
}  

module.exports = { 
    register, 
    login };