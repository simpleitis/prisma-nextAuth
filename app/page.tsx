import { prisma } from "@/lib/prisma";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { User } from "./user";
import { LoginButton, LogoutButton } from "./auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // const student = await prisma.student.findFirst({
  //   where: {
  //     email: "test@test.com",
  //   },
  // });

  return (
    <main className="flex min-h-screen flex-col  p-24 gap-y-10">
      <LoginButton />
      <LogoutButton />
      <div>
        <h1>Server session</h1>
        <p>{JSON.stringify(session)}</p>
      </div>

      <div>
        <h1>Client session</h1>
        <User />
      </div>
    </main>
  );
}
