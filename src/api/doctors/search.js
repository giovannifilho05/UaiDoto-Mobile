import api from "../api";

export default async function search(data = {}) {
  // try {
  //   const result = await api.get('/users/doctors', data)
    
  //   if(result.status === 200) {
  //     return result.data
  //   }
  // } catch(error) {
  //   console.log('Error', result.data)
  // }


  return [
    {
        "id": "62900f53a0f021003164fc83",
        "name": "Paki Rollins",
        "email": "medico@medico.com",
        "password": "$2a$10$F3U92IPnrb.hk3cWr139WuH3HntVffohk0C6isoh3iXjKfzzuoMKW",
        "gender": "MALE",
        "address": {
            "zipCode": "73057-213",
            "city": "Assumenda recusandae",
            "street": "Esse et aliquid aut ",
            "number": "194",
            "complement": "Aut dolorem enim dol"
        },
        "phone": 13047797294,
        "workDays": [
            {
                "day": "SATURDAY",
                "workHours": {
                    "start": "23:21:00",
                    "end": "17:48:00"
                }
            },
            {
                "day": "TUESDAY",
                "workHours": {
                    "start": "18:22:00",
                    "end": "21:28:00"
                }
            }
        ],
        "crm": "MG212332",
        "specialty": null,
        "createdAt": "2022-05-26T23:37:54.885+00:00",
        "updatedAt": "2022-05-26T23:37:54.885+00:00"
    }
]
}