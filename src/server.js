// import http from 'http';
import dotenv from 'dotenv'
import app from './app.js'
dotenv.config();
// const PORT = process.env.PORT || 8000;

// // const server = http.createServer(app);

// // server.listen(PORT, ()=>{
// //     console.log("listening on "+PORT)
// // })


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})