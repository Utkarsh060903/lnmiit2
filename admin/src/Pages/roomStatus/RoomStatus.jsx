// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./RoomStatus.css";

// const RoomStatus = () => {
//   const [rooms, setRooms] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedRoomId, setSelectedRoomId] = useState(null);
//   const [allottedRoom, setAllottedRoom] = useState("");

//   const url = "https://lnmiit-guest-house-server.onrender.com";

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
//       alert(`${allottedRoom} allotted successfully.`);
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


import { useState, useEffect } from "react";
import axios from "axios";
import "./RoomStatus.css";

const RoomStatus = () => {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [allottedRoom, setAllottedRoom] = useState("");
  const [roomNo, setRoomNo] = useState()

  const url = "http://localhost:4001";

  const fetchRooms = async () => {
    try {
      const response = await axios.get(`${url}/api/applications`);
      if (response.status === 200) {
        setRooms(response.data);
      } else {
        console.error("Failed to fetch room data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/applications/${id}`);
      if (response.data.success) {
        alert("Room entry deleted successfully.");
        fetchRooms();
      } else {
        alert("Failed to delete room entry.");
      }
    } catch (error) {
      console.error("Error deleting room entry:", error);
      alert("Error deleting room entry.");
    }
  };

  const openModal = (id) => {
    setSelectedRoomId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRoomId(null);
    setAllottedRoom("");
  };

  const handleAllotRoom = async () => {
    if (allottedRoom) {
      try {
        const response = await axios.patch(`${url}/api/applications/${selectedRoomId}`, {
          roomNumber: allottedRoom,
        });

        if (response.status === 200 && response.data.success) {
          alert(`${allottedRoom} allotted successfully.`);
          closeModal();
          fetchRooms();
          setRoomNo(allottedRoom)
        } else {
          alert("Failed to allot room.");
        }
      } catch (error) {
        console.error("Error allotting room:", error);
        alert("Error allotting room.");
      }
    } else {
      alert("Please select a room.");
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="room-status-container">
      <h2>Room Status</h2>

      <div className="table-container">
        <table className="room-status-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Status</th>
              <th>Room Number</th>
              <th>Actions</th>
              <th>Allot Room</th>
            </tr>
          </thead>
          <tbody>
            {console.log(rooms)}
            {rooms.map((room) => (
              <tr key={room._id}>
                <td>{room.studentName}</td>
                <td>{room.studentRollNumber}</td>
                <td>{room.status || "Pending"}</td>
                <td>{room.roomNumber || "Not Allotted"}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(room._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="allot-button"
                    onClick={() => openModal(room._id)}
                  >
                    Allot Room
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
            
        </table>
        <p>{roomNo}</p>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select a Room</h3>
            <div className="room-selection">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((roomNumber) => (
                <button
                  key={roomNumber}
                  className={`room-button ${
                    allottedRoom === `Room ${roomNumber}` ? "selected" : ""
                  }`}
                  onClick={() => setAllottedRoom(`Room ${roomNumber}`)}
                >
                  Room {roomNumber}
                </button>
              ))}
            </div>
            <button className="allot-confirm-button" onClick={handleAllotRoom}>
              Confirm Allotment
            </button>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomStatus;
