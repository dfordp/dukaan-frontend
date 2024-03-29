import PaymentMethods from "./Components/PaymentMethods"
import ManualPayment from "./Components/ManualPayment"

const MainPage = () => {
  return (
  <div className="flex flex-col items-center justify-center font-['Galano Grotesque']">  
    <div className="w-[760px] h-[502px]  bg-white rounded-lg shadow flex-col justify-start mt-3 items-center gap-6 inline-flex">
      <PaymentMethods/>
    </div>
    <div>
      <ManualPayment/>
      <div className="w-full flex justify-end mt-8 md:mb-4 sm:mb-4">
      <div className="w-[94px] h-10 px-6 py-2 hover:opacity-40 bg-sky-700 rounded justify-center items-center gap-2.5 inline-flex">
        <div className="justify-start items-start gap-2 flex">
          <buton className="text-center text-white text-base font-medium leading-normal">Finish</buton>
        </div>
      </div>
    </div>
    </div>
    
  </div>  
  )
}

export default MainPage
