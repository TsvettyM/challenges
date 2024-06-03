import CommonButton from "@/features/common/components/CommonButton";
import CommonInput from "@/features/common/components/CommonInput";
import CommonTextArea from "@/features/common/components/CommonTextArea";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const HomepageContactUsForm = () => {
  const { register, handleSubmit, formState } = useForm<{
    username: string;
    email: string;
    subject: string;
    message: string;
    access_key: string;
  }>({ defaultValues: { access_key: "5b017bbf-56af-4344-a32c-e4d8c803fee0" } });

  const [message, setMessage] = useState("");

  function onSubmit(formValues: any) {
    axios.post("https://api.web3forms.com/submit", formValues).then((res) => {
      setMessage(res.data.message);
    });
  }

  return (
    <div className="homepage__contact-us-form py-20 bg-blue-950 w-full">
      <div className="container flex flex-col items-center justify-center h-full">
        <form
          className="flex flex-col justify-center items-center bg-white w-full max-w-[550px] space-y-3 px-6 py-14 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-3xl text-black font-bold my-3">
            Send me a message
          </h2>
          <p className="text-center text-sm text-[#737375] max-w-[470px]">
            Feel free to get in touch with me with anything related to
            CODINGSPACE or you can just say hi. I will get back to you as soon
            as I can
          </p>

          <CommonInput
            type="text"
            name="username"
            label="Username"
            className="text-[14px] placeholder:text-[#D8D8D8]"
            placeholder="Enter your username..."
            hookRegister={register("username", {
              required: { message: "This is required", value: true },
            })}
            fieldError={formState.errors.username}
          />

          <CommonInput
            type="text"
            name="email"
            label="Email"
            className="text-[14px] placeholder:text-[#D8D8D8]"
            placeholder="Email address"
            hookRegister={register("email", {
              required: { message: "This is required", value: true },
            })}
            fieldError={formState.errors.email}
          />

          <CommonInput
            type="text"
            name="subject"
            label="Subject"
            className="text-[14px] placeholder:text-[#D8D8D8]"
            placeholder="Subject"
            hookRegister={register("subject", {
              required: { message: "This is required", value: true },
            })}
            fieldError={formState.errors.subject}
          />

          <CommonTextArea
            placeholder="Message"
            styleMode="white"
            label="Message"
            className="text-[14px] placeholder:text-[#D8D8D8] h-[98px]"
            hookRegister={register("message", {
              required: { message: "This is required", value: true },
            })}
            fieldError={formState.errors.message}
          />

          {message ? (
            <p className="font-semibold text-green-600 italic">{message}</p>
          ) : null}

          <CommonButton
            type="submit"
            style="bluePurple"
            title="Send"
            className="w-[400px] text-lg text-white font-medium text-center rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default HomepageContactUsForm;
