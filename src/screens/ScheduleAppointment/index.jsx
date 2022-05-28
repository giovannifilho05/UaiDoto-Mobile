import { useState, useEffect } from 'react'
import moment from 'moment'

import DoctorCard from '../../components/DoctorCard'
import OpeningHours from "../../components/OpeningHours/OpeningHours";
import CalendarPicker from "../../components/CalendarPicker/CalendarPicker";
import Button from "../../components/Button";

import { Container, Content } from "./syles";
import { generateDoctorSchedules } from '../../utils/generateDoctorSchedules';

const Days = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAYS',
]

export default function ScheduleAppointment({ route }) {
  const [date, setDate] = useState(new Date());
  const [avaliableTime, setAvaliableTime] = useState([]);
  const [time, setTime] = useState('');

  const { doctor } = route.params;


  useEffect(() => {
    const selectedDay = Days[date.getDay()]
    const filteredDays = doctor.workDays.filter((schedule) => schedule.day === selectedDay)

    setAvaliableTime(generateDoctorSchedules(filteredDays.map((day) => day.workHours)))
  }, [date])

  return (
    <Container>
      <Content>
        <DoctorCard
          doctor={doctor}
        />
        <CalendarPicker
          date={date}
          setDate={setDate}
        />

        {/* {avaliableTime.length > 0 && */}
          <OpeningHours
            avaliableTime={avaliableTime}
            time={time}
            setTime={setTime}
          />
        {/* } */}

        <Button
          label='Confirmar'
        />
      </Content>
    </Container>
  )
}