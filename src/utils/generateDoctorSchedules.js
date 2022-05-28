export function generateDoctorSchedules(schedules) {
  const scheduleTimesAvailable = [];

  schedules.map(schedule => {
    const startSchedule = schedule.start.split(':');
    const endSchedule = schedule.end.split(':');

    const startTime = new Date()
    startTime.setHours(startSchedule[0], startSchedule[1])

    const endTime = new Date()
    endTime.setHours(endSchedule[0], endSchedule[1])


    while (startTime.getTime() < endTime.getTime()) {
      scheduleTimesAvailable.push(`${startTime.getHours()}:${startTime.getMinutes()}`)

      startTime.setMinutes(startTime.getMinutes() + 30)
    }
  })


  return scheduleTimesAvailable
}