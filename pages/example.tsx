import { prisma } from "@/lib/prisma";
import { Student } from "@prisma/client";
import { GetServerSideProps } from "next";

type Props = {
  student: Student;
};

export default function Page(props: Props) {
  console.log(props);
  return <main>Hello, {props.student.name}</main>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const student = await prisma.student.findFirst({
    where: {
      email: "test@test.com",
    },
  });

  return {
    props: {
      student,
    },
  };
};
