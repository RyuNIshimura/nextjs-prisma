import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {`2020 ${APP_NAME}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
