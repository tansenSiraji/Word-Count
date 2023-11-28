export const Header = ({heading, subHeading}) => {
    console.log(heading, subHeading)
  return (
    <div className="flex flex-col items-center w-full mb-8 md:mb-16 p-4">
        <h1 className="font-bold text-blue-950 text-2xl text-center">{heading}</h1>
        <h3 className="text-blue-950 text-md  md:text-lg  text-center leading-tight">{subHeading}</h3>
    </div>
  )
}
