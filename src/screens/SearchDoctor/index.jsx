import { useState, useEffect } from 'react'
import { View } from 'react-native'

import Input from '../../components/Input'
import DropDown from '../../components/DropDown'
import DoctorCard from '../../components/DoctorCard'

import { Container, Content, SearchMenu, DropDownArea, CardArea } from './styles'
import getSpecialties from '../../api/doctors/specialties'
import search from '../../api/doctors/search'

export default function SearchDoctor() {
  const [specialties, setSpecialties] = useState([])
  const [cities, setCities] = useState([])
  const [specialty, setSpecialty] = useState('')
  const [city, setCity] = useState('')
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    getSpecialties()
      .then(specialties => {
        const ranamedSpecialties = specialties.map(specialty => ({ label: specialty.specialty, value: specialty.id }))
        setSpecialties(ranamedSpecialties)
      })
      .catch(err => console.error(err))

    setCities([
      { label: 'São João del Rei', value: '1' },
      { label: 'São Pedro', value: '2' },
      { label: 'São Luís', value: '3' },
      { label: 'São Vicente', value: '4' },
      { label: 'São Bernardo do Campo', value: '5' },
    ])

    search()
      .then((doctors) => {
        setDoctors(doctors)
      })

  }, [])

  return (
    <Container>
      <Content>
        <SearchMenu>
          <Input
            placeholder="Digite um nome"
          />
          <DropDownArea>
            <DropDown
              label="Especialidade"
              items={specialties}
              value={specialty}
              setValue={setSpecialty}
              isFirst
              style={{ flex: 1, borderColor: 'white' }}
              placeholder="Especialidade"
              zIndex={1000}
              zIndexInverse={2000}
            />
            <DropDown
              label="Cidade"
              items={cities}
              value={city}
              setValue={setCity}
              style={{ flex: 1 }}
              placeholder="Cidade"
              zIndex={2000}
              zIndexInverse={3000}
            />
          </DropDownArea>
        </SearchMenu>

        <CardArea>
          <View>
            {doctors.map(doctor => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />
            ))}
          </View>
        </CardArea>
      </Content>
    </Container>
  )
}