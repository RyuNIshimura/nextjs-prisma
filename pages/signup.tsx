import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/client";
import { APP_NAME, APP_DOMAIN, APP_DESCRIPTION } from "@/lib/constants";

export default function SignUp() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/username");
  }, [router, session]);

  const handleSignin = (e: any) => {
    e.preventDefault();
    signIn("google");
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
      <div className="flex flex-col justify-center py-12 mt-8 bg-white sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="w-auto h-12 mx-auto" src="/icon.png" alt="Workflow" />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            はじめる
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-2xl sm:px-10">
            <div className="mt-6">
              <div>
                <button
                  onClick={handleSignin}
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                >
                  Googleでログイン
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
