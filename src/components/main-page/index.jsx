import PaymentMethods from "./Components/PaymentMethods"
import ManualPayment from "./Components/ManualPayment"

const MainPage = () => {
  return (
  <div className="flex flex-col items-center justify-center">  
    <div className="items-stretch shadow-sm bg-white self-center flex w-[760px] max-w-full flex-col mt-8 p-6 rounded-lg max-md:px-5">
      <PaymentMethods/>
    </div>
    <div>
      <ManualPayment/>
      <div className="flex justify-end mt-8">
      <span className="text-white text-center text-base font-medium leading-6 whitespace-nowrap items-stretch rounded bg-sky-700 px-6 py-2">
        Finish
      </span>
    </div>
    </div>
  </div>  
  )
}

export default MainPage
