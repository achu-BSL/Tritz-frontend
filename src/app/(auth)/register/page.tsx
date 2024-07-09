"use client"
import { Input } from "@/components/Input"


export default function Register() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-[900px] border-black shadow-xl bg-white">
        <div className="flex-1 flex flex-col justify-center gap-4 px-6 py-8 ">
          <div className="">
            <h3 className="text-xl font-semibold font-merriweather">
            Register
            </h3>
            <p className="font-owsald">Join the Community of Champions</p>
          </div>

          <form className="flex-1 flex flex-col gap-4" action="">
            <Input label="Email" type="email" placeholder="example@gmail.com"/>
            <Input label="Username" type="text" placeholder="John Deo"/>
            <Input label="Password" type="password" placeholder="password"/>
            <Input label="Confirm-password" type="password" placeholder="confirm-password"/>

            <button className="bg-secondary hover:bg-secondary/90 py-2 font-raleway font-medium rounded-lg">Register</button>
          </form>

          <div>
            {" "}
            <h4>OR</h4>
          </div>
          <div>
            <h1>Google</h1>
          </div>
        </div>
        <div className="bg-primary flex-1"></div>
      </div>
    </div>
  );
}
