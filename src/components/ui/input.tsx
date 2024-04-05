'use client'

import React, { forwardRef, useState } from "react";
import style from "@/styles/input.module.css";
import { LoginButton } from "@/components/ui/Buttons";

interface InputProps {
  typeInput: "text" | "password";
  placeholder?: string;
  logIn?: () => void;
  label?: string
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


export const TextFields = forwardRef<HTMLInputElement, InputProps>(
  ({ label, typeInput }: InputProps, ref) => {
    return (
      <div className={style.textFields}>
        {(label) && (
          <label htmlFor="">{label}:</label>
        )}

        <input ref={ref} type={typeInput} />
      </div>
    )
  })





