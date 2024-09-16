// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./RoomSet.css";

// const RoomSet = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [availability, setAvailability] = useState({});

//   useEffect(() => {
//     if (selectedDate) {
//       // Fetch availability data from the database for the selected date
//       axios.get(`http://localhost:4001/api/availability-range?startDate=${selectedDate}&endDate=${selectedDate}`)
//         .then(response => {
//           const storedAvailability = response.data[0]?.availability || {};
//           setAvailability(storedAvailability);
//         })
//         .catch(error => {
//           console.error("Error fetching availability data:", error);
//         });
//     }
//   }, [selectedDate]);

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   const handleAvailabilityChange = (room, type) => {
//     setAvailability((prevAvailability) => {
//       const updatedRoomAvailability = prevAvailability[room] || { available: false, notAvailable: false };
//       const updatedAvailability = {
//         ...prevAvailability,
//         [room]: {
//           ...updatedRoomAvailability,
//           [type]: !updatedRoomAvailability[type],
//         },
//       };
//       return updatedAvailability;
//     });
//   };

//   const handleSave = () => {
//     const data = {
//       date: selectedDate,
//       availability: availability,
//     };

//     // Store availability data in the database
//     axios.post("http://localhost:4001/api/store-availability", data)
//   .then(response => {
//     console.log("Availability data saved successfully:", response.data);
//   })
//   .catch(error => {
//     console.error("Error saving availability data:", error);
//   });
//   };

//   const getAvailabilityCounts = () => {
//     let availableCount = 0;
//     let notAvailableCount = 0;

//     for (const room in availability) {
//       if (availability[room].available) {
//         availableCount++;
//       }
//       if (availability[room].notAvailable) {
//         notAvailableCount++;
//       }
//     }

//     return { availableCount, notAvailableCount };
//   };

//   const { availableCount, notAvailableCount } = getAvailabilityCounts();

//   return (
//     <div className="roomset">
//       <div className="main">
//         <div className="controls">
//           <div className="date-picker">
//             <label htmlFor="availability-date">Set Availability Date</label>
//             <input
//               type="date"
//               id="availability-date"
//               name="availability-date"
//               value={selectedDate}
//               onChange={handleDateChange}
//             />
//           </div>
//           <div className="save-button">
//             <button className="save-button" onClick={handleSave}>Save</button>
//           </div>
//         </div>
//         <div className="counts">
//           <p>Total Available Rooms: {availableCount}</p>
//           <p>Total Non-Available Rooms: {notAvailableCount}</p>
//         </div>
//         {[1, 2, 3, 4, 5, 6, 7, 8].map((room) => (
//           <div className="card" key={room}>
//             <h2 className="room-text">ROOM {room}</h2>
//             <div className="availability">
//               <label htmlFor={`available${room}`}>Available</label>
//               <input
//                 type="checkbox"
//                 name={`available${room}`}
//                 id={`available${room}`}
//                 checked={availability[`room${room}`]?.available || false}
//                 onChange={() => handleAvailabilityChange(`room${room}`, "available")}
//               />
//             </div>
//             <div className="non-availability">
//               <label htmlFor={`notAvailable${room}`}>Not Available</label>
//               <input
//                 type="checkbox"
//                 name={`notAvailable${room}`}
//                 id={`notAvailable${room}`}
//                 checked={availability[`room${room}`]?.notAvailable || false}
//                 onChange={() => handleAvailabilityChange(`room${room}`, "notAvailable")}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoomSet;


import { useState, useEffect } from "react";
import axios from "axios";
import "./RoomSet.css";

const RoomSet = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [availability, setAvailability] = useState({});

  useEffect(() => {
    if (selectedDate) {
      // Fetch availability data from the database for the selected date
      axios.get(`http://localhost:4001/api/availability-range?startDate=${selectedDate}&endDate=${selectedDate}`)
        .then(response => {
          const storedAvailability = response.data.message.roomAvailabilities[0]?.availability || {};
          setAvailability(storedAvailability);
        })
        .catch(error => {
          console.error("Error fetching availability data:", error);
        });
    }
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleAvailabilityChange = (room, type) => {
    setAvailability((prevAvailability) => {
      const updatedRoomAvailability = prevAvailability[room] || { available: false, notAvailable: false };
      const updatedAvailability = {
        ...prevAvailability,
        [room]: {
          ...updatedRoomAvailability,
          [type]: !updatedRoomAvailability[type],
        },
      };
      return updatedAvailability;
    });
  };

  const handleSave = () => {
    const data = {
      date: selectedDate,
      availability: availability,
    };

    // Store availability data in the database
    axios.post("http://localhost:4001/api/store-availability", data)
      .then(response => {
        console.log("Availability data saved successfully:", response.data);
      })
      .catch(error => {
        console.error("Error saving availability data:", error);
      });
  };

  const getAvailabilityCounts = () => {
    let availableCount = 0;
    let notAvailableCount = 0;

    for (const room in availability) {
      if (availability[room].available) {
        availableCount++;
      }
      if (availability[room].notAvailable) {
        notAvailableCount++;
      }
    }

    return { availableCount, notAvailableCount };
  };

  const { availableCount, notAvailableCount } = getAvailabilityCounts();

  return (
    <div className="roomset">
      <div className="main">
        <div className="controls">
          <div className="date-picker">
            <label htmlFor="availability-date">Set Availability Date</label>
            <input
              type="date"
              id="availability-date"
              name="availability-date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="save-button">
            <button className="save-button" onClick={handleSave}>Save</button>
          </div>
        </div>
        <div className="counts">
          <p>Total Available Rooms: {availableCount}</p>
          <p>Total Non-Available Rooms: {notAvailableCount}</p>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((room) => (
          <div className="card" key={room}>
            <h2 className="room-text">ROOM {room}</h2>
            <div className="availability">
              <label htmlFor={`available${room}`}>Available</label>
              <input
                type="checkbox"
                name={`available${room}`}
                id={`available${room}`}
                checked={availability[`room${room}`]?.available || false}
                onChange={() => handleAvailabilityChange(`room${room}`, "available")}
              />
            </div>
            <div className="non-availability">
              <label htmlFor={`notAvailable${room}`}>Not Available</label>
              <input
                type="checkbox"
                name={`notAvailable${room}`}
                id={`notAvailable${room}`}
                checked={availability[`room${room}`]?.notAvailable || false}
                onChange={() => handleAvailabilityChange(`room${room}`, "notAvailable")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSet;

