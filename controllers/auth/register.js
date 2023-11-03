// import express from "express";
// import fetch from 'node-fetch';

// const router = express.Router()

// router.post('/api/accounts/signup', (req, res) => {
//     const {name, email, password1, password2} = req.body();

//     const body = JSON.stringify({
//         name,
//         email,
//         password1,
//         password2
//     });
    
//     try {
//         const registerRes = await fetch(`${process.env.API_URL}/api/accounts/signup`, {
//             method: 'post',
//             headers: {
//                 Accept:'application/json',
//                 'Content-Type':'application/json',
//             },
//             body
//         });

//         const data = await.registerRes.json();

//         return res.status(registerRes.status).json(data)

//     } catch (error) {
//         return res.status(500).json({
//             error: 'something went wrong when registering account'
//         })
        
//     }
    

// })

// module.exports = router;
