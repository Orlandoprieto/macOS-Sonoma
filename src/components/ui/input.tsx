'use client'

import React, { forwardRef, useState } from "react";
import style from "@/styles/input.module.css";
import { LoginButton } from "@/components/ui/Buttons";
import { useFormContext } from "react-hook-form"

interface InputProps {
  typeInput: "text" | "password" | "submit";
  placeholder?: string;
  logIn?: () => void;
}

export const LoginInput = forwardRef<HTMLInputElement, InputProps>(
  ({ typeInput, placeholder, logIn }: InputProps, ref) => {
    const [showButtonLogin, setShowButtonLogin] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setShowButtonLogin(e.target.value.length > 0);
    };

    return (
      <div className={style.container}>
        <input
          className={style.password}
          placeholder={placeholder}
          type={typeInput}
          onChange={onChange}
          ref={ref}
        />
        {showButtonLogin && <LoginButton onClick={logIn} />}
      </div>
    );
  }
);


interface TextFieldsProps extends InputProps{
  label: string,
  field: string
}

export const TextFields = ({ field, typeInput, label }: TextFieldsProps) => {
  const { register } = useFormContext()

  return (
    <div className={style.textFields}>
      <label htmlFor="">{label}:</label>
      <input
        type={typeInput}
        {...register(field)}
      />
    </div>
  )
}





