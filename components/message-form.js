"use client"

import { useForm } from "react-hook-form"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";


const MessageForm = () => {

     const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const onsubmit = (data) => {
  const { name, email, subject, description } = data;

  const mailtoLink = `mailto:ankitsinghchouhan682@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Hi, my name is ${name} (${email}).\n\n${description}\n\nLooking forward to your response.`
  )}`;

  window.open(mailtoLink, '_blank');
  reset(); // Clear the form
};


  return (
    <div className="border-2 dark:border-gray-900 mx-5 p-5 rounded-md dark:bg-[#0f0f13] bg-gray-100 border-gray-300">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onsubmit)}>
            <div className="flex flex-col gap-1">
            <label className="font-bold dark:text-gray-400 text-gray-700" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <Input
                type="text"
                name="name"
                className="border-gray-300 py-2 border-2  dark:border-gray-800"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required"})}
            />
            { errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
            <label className="font-bold dark:text-gray-400 text-gray-700" htmlFor="name">Email <span className="text-red-500">*</span></label>
            <Input
                type="email"
                name="email"
                className="border-gray-300 py-2 border-2 dark:border-gray-800" 
                placeholder="Enter your email"
                {...register("email", { required: "Email is required"})}
            />
            { errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>


            <div className="flex flex-col gap-1">
            <label className="font-bold dark:text-gray-400 text-gray-700" htmlFor="name">Subject <span className="text-red-500">*</span></label>
            <Input
                type="text"
                name="subject"
                className="border-gray-300 py-2 border-2 dark:border-gray-800"
                placeholder="Enter subject here"
                {...register("subject", { required: "Subject is required"})}
            />
            { errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
            </div>


            <div className="flex flex-col gap-1">
            <label className="font-bold dark:text-gray-400 text-gray-700" htmlFor="description">Description <span className="text-red-500">*</span></label>
            <Textarea
                type="text"
                className="border-gray-300 h-32 py-2 border-2 dark:border-gray-800"
                placeholder="Enter description here"
                {...register("description", { required: "Description is required"})}
            />
            { errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
            </div>
             <Button
             type="submit"
                className="bg-blue-600 py-5 flex items-center font-bold text-white hover:bg-blue-700 transition-colors duration-300"
             >
                <Send className=" h-4 w-4" />
                Send Message
             </Button>

        </form>
    </div>
  )
}

export default MessageForm