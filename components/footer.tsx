import { Layout } from "./layout";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-y">
        <span className="text-dark">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
      </Layout>
    </footer>
  )
};
