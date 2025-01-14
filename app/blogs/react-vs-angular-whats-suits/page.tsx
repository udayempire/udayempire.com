import { FullBlog } from "@/components/blogs/fullBlog";
export default function reactBlog(){
    return <div className="w-10/12  mx-auto flex flex-col items-center mt-2 xl:ml-48">
        <div className="flex justify-center mt-1">
            <div className="mt-7">
                <FullBlog/>
            </div>
        </div>
    </div>
}