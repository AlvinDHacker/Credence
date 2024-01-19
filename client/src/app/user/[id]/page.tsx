import { getServerAuthSession } from "~/server/auth";
import { createOrder } from "~/app/api/order";

export default async function Page({ params }: { params: { id: string } }) {
  const session = getServerAuthSession();
  const sessionValue = await session;

  if (sessionValue && typeof sessionValue.user.name === "string") {
    const result = await createOrder(sessionValue.user.id, params.id);
    console.log(result); // You can handle the result as you wish
  }

  return (
    <div>
      <div>My Product id: {params.id}</div>
      <div>Your order is placed</div>
    </div>
  );
}
