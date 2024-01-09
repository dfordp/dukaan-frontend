import { paymentMethods } from "../../../constants"

const PaymentMethods = () => {
  return (
    <div className="p-6">
      <div className="flex-col justify-start items-center gap-6 flex mb-1">
        <div className="flex-col justify-start items-start gap-0.5 flex">
          <div className="w-[712px] text-zinc-900 text-base font-medium  leading-normal">Payment providers</div>
          <div className="text-zinc-500 text-sm font-normalleading-tight">Set up payment providers to accept payments from your customers.</div>
        </div>
      </div>
      {paymentMethods.map((method, index) => (
        <div key={index} className="flex-col justify-start items-start gap-4 flex">
          <div className="w-[712px] rounded justify-start items-center gap-6 inline-flex">
            <div className="grow shrink basis-0 h-16 justify-start items-center gap-4 flex">
              <div className="w-14 h-14 relative rounded border border-neutral-200">
                <img src={method.imageUrl} alt={method.name} className="absolute w-full h-full object-cover rounded" />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="self-stretch text-zinc-900 text-base font-medium leading-normal">{method.name}</div>
              </div>
            </div>
            <div className="px-4 py-2 rounded border border-sky-700 hover:opacity-50 justify-center items-center gap-2.5 flex">
              <div className="text-center text-sky-700 text-sm font-medium  leading-tight">Set up</div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex-col justify-start items-start gap-4 flex">
          <div className="w-[712px] rounded justify-start items-center gap-6 inline-flex">
            <div className="grow shrink basis-0 h-16 justify-start items-center gap-4 flex">
              <div className="w-14 h-14 relative rounded border border-neutral-200">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bc39171791a85a444b23a1983c2f6ea5e45b33d6aa7eea36ec423fdbee65453?apiKey=3c243bff4d854143b1e24c4a3a578c5d&" alt="Cash On Delivery" className="absolute w-full h-full object-cover rounded" />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="self-stretch text-zinc-900 text-base font-medium  leading-normal">Cash On Delivery</div>
                <div className="text-zinc-500 text-sm leading-5 max-md:max-w-full">Receive payments in cash upon delivery.</div>
              </div>
            </div>
            <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec14c7c54d2a27eba0ec941d761fac5b0c8729c4bb1cdaf2f205b6b473b6e56c?apiKey=3c243bff4d854143b1e24c4a3a578c5d&"
            className="aspect-[1.64] object-contain object-center mt-2 w-9 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
          />
          </div>
        </div>
    </div>
  )
}

export default PaymentMethods
