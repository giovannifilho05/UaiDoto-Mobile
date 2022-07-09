import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import Input from '../../components/Input'
import DropDown from '../../components/DropDown'
import DoctorCard from '../../components/DoctorCard'

import { Container, Content, SearchMenu, DropDownArea, CardArea } from './styles'
import getSpecialties from '../../api/doctors/specialties'
import searchDoctors from '../../api/doctors/searchDoctors'

export default function SearchDoctor() {
  const [name, setName] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [city, setCity] = useState('')
  const [specialties, setSpecialties] = useState([])
  const [cities, setCities] = useState([])
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    console.log('useEffect SearchDoctor')
    getSpecialties()
      .then(specialties => {
        setSpecialties(specialties)
      })
      .catch(err => console.error(err))

    setCities([
      { label: 'São João del Rei', value: '1' },
      { label: 'São Pedro', value: '2' },
      { label: 'São Luís', value: '3' },
      { label: 'São Vicente', value: '4' },
      { label: 'São Bernardo do Campo', value: '5' },
    ])

    searchDoctors()
      .then((doctors) => {
        setDoctors(doctors)
      })
      .catch(err => console.error(err))

  }, [])

  useEffect(() => {
    console.log(specialty)
    searchDoctors({
      params: {
        name,
        specialty,
        // city,
      }
    })
      .then((doctors) => {
        setDoctors(doctors)
      })
      .catch(err => console.error(err))
  }, [name, specialty, city])

  return (
    <Container>
      <Content>
        <SearchMenu>
          <Input
            placeholder="Digite um nome"
            onChangeText={name => setName(name)}
            setValue={name}
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
            {
              doctors.length > 0 &&
              doctors.map(doctor => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                />
              ))
            }

            {doctors.length === 0 && <Text>Nenhum médico encontrado.</Text>}
          </View>
        </CardArea>
      </Content>
    </Container>
  )
}