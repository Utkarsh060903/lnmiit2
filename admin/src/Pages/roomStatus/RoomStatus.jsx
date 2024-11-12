// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./RoomStatus.css";

// const RoomStatus = () => {
//   const [rooms, setRooms] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedRoomId, setSelectedRoomId] = useState(null);
//   const [allottedRoom, setAllottedRoom] = useState("");

//   const url = "http://localhost:4001";

//   const fetchRooms = async () => {
//     try {
//       const response = await axios.get(`${url}/api/applications`);
//       if (response.status === 200) {
//         setRooms(response.data);
//       } else {
//         console.error("Failed to fetch room data.");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`${url}/api/applications/${id}`);
//       if (response.data.success) {
//         alert("Room entry deleted successfully.");
//         fetchRooms();
//       } else {
//         alert("Failed to delete room entry.");
//       }
//     } catch (error) {
//       console.error("Error deleting room entry:", error);
//       alert("Error deleting room entry.");
//     }
//   };

//   const openModal = (id) => {
//     setSelectedRoomId(id);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedRoomId(null);
//     setAllottedRoom("");
//   };

//   const handleAllotRoom = () => {
//     if (allottedRoom) {
//       // Send allotment request to the backend (replace with actual API call)
//       alert(`Room ${allottedRoom} allotted successfully.`);
//       closeModal();
//       fetchRooms();
//     } else {
//       alert("Please select a room.");
//     }
//   };

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   return (
//     <div className="room-status-container">
//       <h2>Room Status</h2>

//       <div className="table-container">
//         <table className="room-status-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Roll Number</th>
//               <th>Status</th>
//               <th>Actions</th>
//               <th>Allot Room</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rooms.map((room) => (
//               <tr key={room._id}>
//                 <td>{room.studentName}</td>
//                 <td>{room.studentRollNumber}</td>
//                 <td>{room.status || "Pending"}</td>
//                 <td>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDelete(room._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     className="allot-button"
//                     onClick={() => openModal(room._id)}
//                   >
//                     Allot Room
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>Select a Room</h3>
//             <div className="room-selection">
//               {[1, 2, 3, 4, 5, 6, 7, 8].map((roomNumber) => (
//                 <button
//                   key={roomNumber}
//                   className={`room-button ${
//                     allottedRoom === `Room ${roomNumber}` ? "selected" : ""
//                   }`}
//                   onClick={() => setAllottedRoom(`Room ${roomNumber}`)}
//                 >
//                   Room {roomNumber}
//                 </button>
//               ))}
//             </div>
//             <button className="allot-confirm-button" onClick={handleAllotRoom}>
//               Confirm Allotment
//             </button>
//             <button className="close-button" onClick={closeModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomStatus;

// import { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import "./RoomStatus.css";
// import { myContext } from "../../context/Context"; // Assuming context is set up to share data

// const RoomStatus = () => {
//   const [rooms, setRooms] = useState([]);
//   const [availableRooms, setAvailableRooms] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedRoomId, setSelectedRoomId] = useState(null);
//   const [allottedRoom, setAllottedRoom] = useState("");

//   const { info } = useContext(myContext); // Using shared info data from context
//   const url = "https://lnmiit-guest-house-server.onrender.com";

//   // Fetch all applied room data
//   const fetchRooms = async () => {
//     try {
//       const response = await axios.get(`${url}/api/applications`);
//       if (response.status === 200) {
//         setRooms(response.data);
//       } else {
//         console.error("Failed to fetch room data.");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Fetch available rooms based on selected dates
//   const fetchAvailableRooms = async (checkinDate, checkoutDate) => {
//     try {
//       const response = await axios.get(`${url}/api/room-available`, {
//         params: { checkinDate, checkoutDate }
//       });
//       if (response.status === 200) {
//         setAvailableRooms(response.data.availableRooms);
//       } else {
//         console.error("Failed to fetch available rooms.");
//       }
//     } catch (error) {
//       console.error("Error fetching available rooms:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`${url}/api/applications/${id}`);
//       if (response.data.success) {
//         alert("Room entry deleted successfully.");
//         fetchRooms();
//       } else {
//         alert("Failed to delete room entry.");
//       }
//     } catch (error) {
//       console.error("Error deleting room entry:", error);
//       alert("Error deleting room entry.");
//     }
//   };

//   const openModal = (id, checkinDate, checkoutDate) => {
//     setSelectedRoomId(id);
//     setShowModal(true);
//     fetchAvailableRooms(checkinDate, checkoutDate);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedRoomId(null);
//     setAllottedRoom("");
//   };

//   const handleAllotRoom = async () => {
//     if (allottedRoom && selectedRoomId) {
//       const selectedRoom = rooms.find(room => room._id === selectedRoomId);

//       try {
//         const response = await axios.post(`${url}/api/room-info`, {
//           roomNo: allottedRoom,
//           studentName: selectedRoom.studentName,
//           checkinDate: selectedRoom.arrivalDate,
//           checkoutDate: selectedRoom.departureDate,
//         });

//         if (response.status === 201) {
//           alert(`Room ${allottedRoom} allotted successfully.`);
//           closeModal();
//           fetchRooms();
//         } else {
//           alert("Failed to allot room.");
//         }
//       } catch (error) {
//         console.error("Error allotting room:", error);
//         alert("Error allotting room. Please try again.");
//       }
//     } else {
//       alert("Please select a room.");
//     }
//   };

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   return (
//     <div className="room-status-container">
//       <h2>Room Status</h2>

//       <div className="table-container">
//         <table className="room-status-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Roll Number</th>
//               <th>Status</th>
//               <th>Actions</th>
//               <th>Allot Room</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rooms.map((room) => (
//               <tr key={room._id}>
//                 <td>{room.studentName}</td>
//                 <td>{room.studentRollNumber}</td>
//                 <td>{room.status || "Pending"}</td>
//                 <td>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDelete(room._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     className="allot-button"
//                     onClick={() =>
//                       openModal(room._id, room.checkinDate, room.checkoutDate)
//                     }
//                   >
//                     Allot Room
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>Select a Room</h3>
//             <div className="room-selection">
//               {availableRooms.map((roomNumber) => (
//                 <button
//                   key={roomNumber}
//                   className={`room-button ${
//                     allottedRoom === roomNumber ? "selected" : ""
//                   }`}
//                   onClick={() => setAllottedRoom(roomNumber)}
//                 >
//                   Room {roomNumber}
//                 </button>
//               ))}
//             </div>
//             <button className="allot-confirm-button" onClick={handleAllotRoom}>
//               Confirm Allotment
//             </button>
//             <button className="close-button" onClick={closeModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomStatus;
