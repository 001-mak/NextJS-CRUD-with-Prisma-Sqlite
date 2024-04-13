import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function handleCreate(data: FormData) {
    "use server";
    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        return console.log("errror")
      
    } else {
      await prisma.todo.create({
        data: {
          title,
          complete: false,
        },
      });
      return redirect("/")
    }
}
export default function Page() {
  return (
    <>
      <div className="container m-5 p-5">
        <div className="back my-3">
          <button className="">
            <Link href="..">Back</Link>
          </button>
        </div>
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            action={handleCreate}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
