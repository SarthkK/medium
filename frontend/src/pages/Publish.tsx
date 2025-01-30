import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar";
import { CreateBlogInput } from "@sarthkkharwal/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function Publish() {
  const [input, setInputs] = useState<CreateBlogInput>({
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col ">
      <Appbar />
      <div className="flex-grow flex flex-col items-center p-3 md:p-8 lg:p-14">
        <input
          type="text"
          autoFocus
          className="focus:outline-none border-b p-4 max-w-screen-lg w-full text-3xl lg:text-6xl font-extrabold placeholder:text-slate-300"
          placeholder="Title"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputs((c) => ({
              ...c,
              title: e.target.value,
            }));
          }}
        />
        <textarea
          className="focus:outline-none max-w-screen-lg w-full min-h-[50vh] p-8 resize-none overflow-hidden"
          placeholder="Write your story"
          onInput={(e) => {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          }}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setInputs((c) => ({
              ...c,
              content: e.target.value,
            }));
          }}
        ></textarea>
      </div>
      <div className="flex justify-center pb-10">
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          onClick={async () => {
            const res = await axios.post(
              `${BACKEND_URL}/api/v1/blog`,
              {
                title: input.title,
                content: input.content,
              },
              {
                headers: {
                  Authorization: localStorage.getItem("Authorization"),
                },
              }
            );
            navigate(`/blog/${res.data.id}`);
          }}
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default Publish;
