import { createContext } from "react"

const JWTDataContext = createContext({})

export function JWTDataProvider({ children }) {
  const [jwtData, setJwtData] = useState(() => {
    // const storagedCart = localStorage.getItem('@RocketShoes:cart')

    // if (storagedCart) {
    //   return JSON.parse(storagedCart);
    // }

    return {};
  });

  return (
    <JWTDataContext.Provider
      value={{ jwtData }}
    >
      {children}
    </JWTDataContext.Provider>
  )
}
export function useJWTData() {
  const context = useContext(JWTDataContext)

  return context
}