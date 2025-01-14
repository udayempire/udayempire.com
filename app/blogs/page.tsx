import { Blog } from "@/components/blogs/blog";

export default function Blogs(){
    return <div className="w-10/12  mx-auto flex flex-col items-center mt-2 xl:ml-48">
        <div className="flex justify-center mt-10">
            <div className="mt-7">
                <Blog/>
            </div>
        </div>
    </div>
}