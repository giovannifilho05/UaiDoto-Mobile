import { useState, useEffect } from 'react'

import DoctorCard from '../../components/DoctorCard'
import OpeningHours from "../../components/OpeningHours/OpeningHours"
import CalendarPicker from "../../components/CalendarPicker/CalendarPicker"
import Button from "../../components/Button"

import { Container, Content } from "./syles"
import { generateDoctorSchedules } from '../../utils/generateDoctorSchedules'
import createAppointments from '../../api/appointments/createAppointments'
import { getPatientData } from '../../utils/patient'

const Days = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAYS',
]

// async function getPatientData() {
//   const token = await AsyncStorage.getItem('@UaiDoto_token')
//   return jwt_decode(token)
// }

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

  function handleConfirm() {
    // console.log(doctor.id)
    getPatientData()
      .then(({ sub: patientId }) => {
        const dateTime = date
        dateTime.setHours(time.split(':')[0], time.split(':')[1], 0)

        createAppointments({
          doctorId: doctor.id,
          patientId: patientId,
          dateTime: dateTime.toISOString()
        })
        .then((data) => {
          console.log(data)
          if(Object.keys(data).length > 0) {
            alert('Consulta marcada com sucesso.')
          }
        })
      })
  }

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

        <OpeningHours
          avaliableTime={avaliableTime}
          setTime={setTime}
        />

        <Button
          label='Confirmar'
          onPress={handleConfirm}
        />
      </Content>
    </Container>
  )
}