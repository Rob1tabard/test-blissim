import DefaultLayaout from "../components/DefaultLayout";
import {
  withStyles,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";

const useStyles = (theme) => ({
  container: { marginTop: theme.spacing(5) },
});

const Home = (props) => {
  const { classes } = props;
  return (
    <DefaultLayaout>
      <div className="lg:relative bg-gray-50">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">SuperShop</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                beauty box.
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/boutique" passhref>
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Go to Shop
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/static/images/beauty.png"
            width="500"
            height="500"
            layout="fill"
            alt="Beauty products"
          />
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center my-10 space-y-10">
        <span className="h-px w-1/2 rounded bg-slate-200" />
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          Learn more about us!
        </h2>
        <p className="mt-3 max-w-md mx-auto text-lg text-justify text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </DefaultLayaout>
  );
};
export default withStyles(useStyles)(Home);
