import { Counter } from "../components/Counter"
import { Header } from "../components/Header"

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center">
        <Header heading = "Word Counter" subHeading="Please enter text below to count characters and word"/>
        <Counter/>
    </div>
  )
}
