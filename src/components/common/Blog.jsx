import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";


export const Blog = () => {
  return (
    <>
      {blogs.map((blog,idx) => (
        <div className="w-full" key={idx}>
          <div className="overflow-hidden rounded-md group">
            <Image
              width={386}
              height={271}
              className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500"
              src={blog.image}
              alt="blog"
            />
          </div>
          <div className="relative pt-4 pr-5">
            <div className="absolute text-brand-black-100 flex flex-col items-center bg-white shadow-date rounded-xl pt-2.5 w-[70px] h-[70px] right-3 -top-10">
              <span className="text-xs">{blog.date.month}</span>
              <span className="text-xl font-semibold">{blog.date.day}</span>
            </div>
            <a className="text-brand-black-200 text-xs leading-6" href="#">
              {blog.tag}
            </a>
            <h6 className="text-[15px] leading-7 hover:text-brand-main cursor-pointer font-semibold lg:pr-10 mt-1 mb-2">
              <Link href={`#`}>{blog.title}</Link>
            </h6>
          </div>
        </div>
      ))}
    </>
  )
}