// CLIENT SIDE ROUTE PROTECTION
// 'use client'

import { authOptions } from "@/checker";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default async function Dashboard() {
  // CLIENT SIDE ROUTE PROTECTION
  // const {status} = useSession({
  //     required: true,
  //     onUnauthenticated() {
  //         console.log('Login dude')
  //     }
  // })
  //   if (status === "loading") {
  //     <p>Loading...</p>;
  //   }

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <div>Dashboard</div>;
}
