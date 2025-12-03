import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SeatLayout = () => {
  const {id,date} = useParams();
  const [selectedSeats,setSelectedSeats] = useState([]);
  const [selectedTime,setSelectedTime] = useState(null);
  const [show,setShow] = useState(null);
  const navigate = useNavigate();
  return (
    <div>
      
    </div>
  )
}

export default SeatLayout