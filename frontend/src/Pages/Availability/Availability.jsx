// // import React from 'react';
// // import { Badge, Calendar } from 'antd';
// // import "./Availability.css";

// // const getListData = (value) => {
// //   const data = {
// //     3: {
// //       17: [
// //         { type: 'warning', content: '7 Available.' },
// //         { type: 'success', content: '5 not Available.' },
// //       ],
// //       18: [
// //         { type: 'warning', content: '10 Available.' },
// //         { type: 'success', content: '1 not Available.' },
// //       ],
// //       19: [
// //         { type: 'warning', content: '11 Available.' },
// //         { type: 'success', content: '1 not Available.' },
// //       ],
// //       20: [
// //         { type: 'warning', content: '9 Available.' },
// //         { type: 'success', content: '3 not Available.' },
// //       ],
// //     },
// //     4: {
// //       10: [
// //         { type: 'warning', content: 'This is warning event.' },
// //         { type: 'success', content: 'This is usual event.' },
// //         { type: 'error', content: 'This is error event.' },
// //       ],
// //       16: [
// //         { type: 'warning', content: 'This is warning event.' },
// //         { type: 'success', content: 'This is usual event.' },
// //         { type: 'error', content: 'This is error event.' },
// //       ],
// //     },
// //     5: {
// //       8: [
// //         { type: 'warning', content: 'This is warning event' },
// //         { type: 'success', content: 'This is very long usual event......' },
// //         { type: 'error', content: 'This is error event 1.' },
// //         { type: 'error', content: 'This is error event 2.' },
// //         { type: 'error', content: 'This is error event 3.' },
// //         { type: 'error', content: 'This is error event 4.' },
// //       ],
// //     },
// //   };

// //   return data?.[value.month()]?.[value.date()] || [];
// // };

// // const Availability = () => {
// //   const dateCellRender = (value) => {
// //     const listData = getListData(value);
// //     return (
// //       <ul className="events">
// //         {listData.map((item) => (
// //           <li key={item.content}>
// //             <Badge status={item.type} text={item.content} />
// //           </li>
// //         ))}
// //       </ul>
// //     );
// //   };

// //   const cellRender = (current, info) => {
// //     if (info.type === 'date') return dateCellRender(current);
// //     return info.originNode;
// //   };

// //   return (
// //     <div className="availability-container">
// //       <h2 className="availability-heading">Availability</h2>
// //       <Calendar cellRender={cellRender} />
// //     </div>
// //   );
// // };

// // export default Availability;






import { useEffect, useState } from 'react';
import { Badge, Calendar, Spin, message } from 'antd';
import axios from 'axios';
import moment from 'moment';
import "./Availability.css";

const Availability = () => {
  const [availabilityData, setAvailabilityData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchAvailabilityData = async (monthMoment) => {
    setLoading(true);
    const startDate = monthMoment.startOf('month').format('YYYY-MM-DD');
    const endDate = monthMoment.endOf('month').format('YYYY-MM-DD');
  
    try {
      const response = await axios.get('http://localhost:4001/api/availability-range', {
        params: {
          startDate,
          endDate,
        },
      });
  
      const data = {};
      const availabilityEntries = response.data.message.roomAvailabilities || [];
  
      availabilityEntries.forEach(({ date, availability }) => {
        data[date] = availability;
      });
  
      setAvailabilityData(data);
    } catch (error) {
      console.error('Error fetching availability data:', error);
      message.error('Failed to fetch availability data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const currentMonth = moment();
    fetchAvailabilityData(currentMonth);
  }, []);

  const onPanelChange = (value) => {
    fetchAvailabilityData(value);
  };

  const dateCellRender = (value) => {
    const dateKey = value.format('YYYY-MM-DD');
    const storedAvailability = availabilityData[dateKey] || {};

    let availableCount = 0;
    let notAvailableCount = 0;

    for (const room in storedAvailability) {
      if (storedAvailability[room].available) {
        availableCount++;
      }
      if (storedAvailability[room].notAvailable) {
        notAvailableCount++;
      }
    }

    const listData = [];
    if (availableCount > 0) {
      listData.push({ type: 'success', content: `Available: ${availableCount}` });
    }
    if (notAvailableCount > 0) {
      listData.push({ type: 'error', content: `Not Available: ${notAvailableCount}` });
    }

    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div id='availability' className="availability-container">
      <h2 className="availability-heading">AVAILABILITY</h2>
      {loading ? (
        <div className="spinner-container">
          <Spin tip="Loading..." size="large" />
        </div>
      ) : (
        <Calendar cellRender={dateCellRender} onPanelChange={onPanelChange} />
      )}
    </div>
  );
};

export default Availability;

