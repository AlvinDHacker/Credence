import { getServerAuthSession } from "~/server/auth";
import { createOrder } from "~/app/api/order";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingBag } from "lucide-react";

export default async function Page({ params }: { params: { id: string } }) {
  const session = getServerAuthSession();
  const sessionValue = await session;
  let result: string | null = null;
  if (sessionValue && typeof sessionValue.user.name === "string") {
    result = await createOrder(sessionValue.user.id, params.id);
    console.log(result); // You can handle the result as you wish
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex items-center space-x-4 rounded-xl bg-white p-6 shadow-md">
        <div>
        <div className="flex flex-row gap-3 ">
          <ShoppingBag className="text-green-500" />
          <h3 className="mb-5 text-lg font-medium tracking-tight text-gray-700">
            Congratulations! Your Order is Placed
          </h3>
        </div>
        <div className="text-md font-medium text-black">
          My Product id: {params.id}
        </div>
        <div className="py-4 text-md md:block hidden max-w-sm  text-black">Scan this QR to know the Product Info and get a detailed info about the info of the QR, how the product was made, where it was manufactured and its journey from start to end</div>
        </div>
        {result && (
          <div className="p-2">
            <QRCode value={result} />
          </div>
        )}
      </div>
    </div>
  );
}
