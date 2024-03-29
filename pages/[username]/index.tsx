import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession, signOut } from "next-auth/client";
import axios from "axios";
import { APP_NAME, APP_DOMAIN, APP_DESCRIPTION } from "@/lib/constants";

export default function Index({ user }: any) {
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");
  }, [router, user]);

  const _deleteAccount = async () => {
    if (!user.id) return;

    try {
      const response = await axios.post("/api/user/delete", {
        userId: user.id,
      });

      if (response.status === 200) {
        signOut();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:image" content={`${APP_DOMAIN}/ogp.png`} />
        <meta name="twitter:image" content={`${APP_DOMAIN}/ogp.png`} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="my-10 bg-white">
        {user && (
          <main>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button
              onClick={_deleteAccount}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              退会する
            </button>
          </main>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { PrismaClient } = require("@prisma/client");
  const prisma = new PrismaClient();

  const session = await getSession(context);

  if (!session?.user?.email) {
    return {
      props: { user: null },
    };
  }

  // https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
  // By unique identifier
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  if (user.createdAt) {
    delete user.createdAt;
  }

  if (user.updatedAt) {
    delete user.updatedAt;
  }

  return {
    props: { user },
  };
};
