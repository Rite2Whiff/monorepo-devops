import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      First Name Mohit Sukhlani:
      {user?.username}
      Password:
      {user?.password}
    </div>
  );
}
