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
      const response = await axios.get('https://lnmiit-guest-house-server.onrender.com/api/availability-range', {
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

      console.log("Fetched data:", data); 
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

  const onPanelChange = (value, mode) => {
    console.log("Panel changed to:", value.format("YYYY-MM-DD"), mode);
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
