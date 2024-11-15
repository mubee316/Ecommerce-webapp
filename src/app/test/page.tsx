import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500 flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
          aut aliquid commodi soluta magnam odio eum vitae deleniti consequuntur
          necessitatibus in similique ab, perspiciatis quia dolorem ratione!
          Amet, suscipit.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-6">
          <h3 className=" text-xl text-gray-400 line-through">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h3 className="font-medium mb-4">Title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            tempora obcaecati dicta deserunt ea voluptatem quibusdam minus
            facilis, quisquam veniam, voluptate vero reprehenderit quidem
            delectus incidunt. Ipsam nihil harum laudantium.
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-medium mb-4">Title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            tempora obcaecati dicta deserunt ea voluptatem quibusdam minus
            facilis, quisquam veniam, voluptate vero reprehenderit quidem
            delectus incidunt. Ipsam nihil harum laudantium.
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-medium mb-4">Title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            tempora obcaecati dicta deserunt ea voluptatem quibusdam minus
            facilis, quisquam veniam, voluptate vero reprehenderit quidem
            delectus incidunt. Ipsam nihil harum laudantium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
