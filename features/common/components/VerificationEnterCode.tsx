import React, {
  useRef,
  useState,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import { FaTimes } from "react-icons/fa";

interface IProps {
  isLoading: boolean;
}

const VerificationEnterCode = ({ isLoading }: IProps) => {
  const [code, setCode] = useState<string[]>(Array(4).fill(""));

  const inputRefs = useRef<HTMLInputElement[]>(Array(4).fill(null));

  const resetCode = () => {
    inputRefs.current.forEach((ref) => {
      if (ref) ref.value = "";
    });
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    setCode(Array(4).fill(""));
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const input = e.target.value.toUpperCase();

    if (/^[0-9]*$/.test(input)) {
      const newCode = [...code];
      newCode[index] = input;
      setCode(newCode);

      if (inputRefs.current[index + 1] && input) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const { keyCode } = e;
    if ((keyCode === 8 || keyCode === 46) && !code[index]) {
      e.preventDefault();
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text").toUpperCase();
    if (/^[0-9]{4}$/.test(pastedData)) {
      const newCode = pastedData.split("").slice(0, 4);
      setCode(newCode);
      newCode.forEach((char, i) => {
        if (inputRefs.current[i]) {
          inputRefs.current[i].value = char;
        }
      });
      if (inputRefs.current[3]) {
        inputRefs.current[3].focus();
      }
    }
  };

  const ClearButton = () => (
    <button
      onClick={resetCode}
      className="text-2xl absolute right-[-30px] top-3"
    >
      <FaTimes />
    </button>
  );

  return (
    <div className="verification__input flex gap-4 sm:gap-12 lg:gap-5 justify-center items-center h-full w-full my-10">
      {code.map((value, index) => (
        <input
          className="w-[60px] md:w-[90px] lg:w-[108px] h-[70px] sm:h-[90px] md:h-[130px] rounded-lg bg-[#1A2036] border-2 border-[#454B63] text-center text-8xl text-[#B2B7D3] outline-none"
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleInput(e, index)}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
          onFocus={handleFocus}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          disabled={isLoading}
        />
      ))}
      {code.some((val) => val) && <ClearButton />}
    </div>
  );
};

export default VerificationEnterCode;
