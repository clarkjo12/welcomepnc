// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { app } from "./firebase/config";
// import { Album } from "./components/Album";
// import { Home } from "./components/Home";

// const db = app.firestore();

// function AdminPage() {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     const unmount = db.collection("albums").onSnapshot(snapshot => {
//       const tempAlbums = [];
//       snapshot.forEach(doc => {
//         tempAlbums.push({ ...doc.data(), id: doc.id });
//       });
//       setAlbums(tempAlbums);
//     });
//     return unmount;
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/admin" render={() => <Home albums={albums} />} />
//         <Route path="/:album" component={Album} />
//       </Routes>
//     </Router>
//   );
// }

// export default AdminPage;
