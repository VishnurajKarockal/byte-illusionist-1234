// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   acceptRequest,
//   cancelRequest,
//   deleteRequest,
// } from "../Pages/user";

// export default function Card({ userr, type, getData }) {
//   const { user } = useSelector((state) => ({ ...state }));
//   const cancelRequestHandler = async (userId) => {
//     const res = await cancelRequest(userId, user.token);
//     if (res == "ok") {
//       getData();
//     }
//   };
//   const confirmHandler = async (userId) => {
//     const res = await acceptRequest(userId, user.token);
//     if (res == "ok") {
//       getData();
//     }
//   };
//   const deleteHandler = async (userId) => {
//     const res = await deleteRequest(userId, user.token);
//     if (res == "ok") {
//       getData();
//     }
//   };
//   return (
//     <div className="req_card">
//       <Link to={`/profile/${userr.username}`}>
//         <img src={userr.picture} alt="" />
//       </Link>
//       <div className="req_name">
//         {userr.first_name} {userr.last_name}
//       </div>
//       {type === "sent" ? (
//         <button
//           className="blue_btn"
//           onClick={() => cancelRequestHandler(userr._id)}
//         >
//           Cancel Request
//         </button>
//       ) : type === "request" ? (
//         <>
//           <button
//             className="blue_btn"
//             onClick={() => confirmHandler(userr._id)}
//           >
//             Confirm
//           </button>
//           <button className="gray_btn" onClick={() => deleteHandler(userr._id)}>
//             Delete
//           </button>
//         </>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }


// "id": "50b8",
// "firstName": "vishnuraj",
// "lastName": "k r",
// "email": "vishnurajkarockal857@gmail.com",
// "mobile": "5588447788",
// "dateOfBirth": "2024-02-07",
// "gender": "Male",
// "password": "1234"



import { Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'

const Friends_card = (item) => {
  return (
    <Box key={item.id}>
      <img src='data:image/png;base64,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' alt='user'/>
      <h2>{item.firstName} {item.lastName}</h2>
      {/* <Text>{item.gender}</Text> */}
    </Box>
  )
}

export default Friends_card