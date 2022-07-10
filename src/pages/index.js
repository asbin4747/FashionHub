import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";
import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Product from "../components/Product";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>FashionHub</title>
      </Head>
      
      <Header />
      

      <main className="max-w-screen-2xl mx-auto py-10 md:-mt-32 ">
        {/* Banner */}
        <div ><Banner /></div>
        {/* ProductFeed */}
        <div className="text-4xl font-bold p-5">Popular Items</div>
        <div className="pb-10 "><ProductFeed products={products} /></div>
        <div className="text-4xl font-bold p-10 row-span-1"> <h4>Product List</h4></div>
        <div className="bg-white">
          <Product products={products} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

// export async function getServerSideProps(context){
//   const products = await fetch("https://fakestoreapi.com/products"). then(
//     (res) => res.json ()
//   );
//   return{
//     props:{
//       products
//     },
//   }
// }

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const products = JSON.parse(jsonData);
  return {
    props: {
      products,
    },
  };
}
