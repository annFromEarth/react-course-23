import { useEffect, useMemo, useState } from "react";
import style from "./passwordStrengthCheck.module.css";

type PropsPassword = {
  password: string;
};

export default function PasswordStrengthCheck({ password }: PropsPassword) {
  const [message, setMessage] = useState("Enter your password");

  const [color, setColor] = useState("black");

  const hasNumber = useMemo(() => /\d/, []);
  const hasUpper = useMemo(() => /[A-Z\u0410-\u042F]/, []);
  const hasLower = useMemo(() => /[a-z\u0430-\u044F]/, []);
  const hasSpecial = useMemo(() => /[!@#$%^&*]/, []);

  useEffect(() => {
    let count = 0;
    if (hasNumber.test(password)) count += 1;
    if (hasUpper.test(password)) count += 1;
    if (hasLower.test(password)) count += 1;
    if (hasSpecial.test(password)) count += 1;

    switch (count) {
      case 0:
        setMessage("Enter your password");
        setColor("black");
        break;
      case 1:
        setMessage("Weak password");
        setColor("red");
        break;
      case 2:
      case 3:
        setMessage("Average password");
        setColor("orange");
        break;
      case 4:
        setMessage("Strong password");
        setColor("green");
        break;
      default:
        setMessage("Unknown error");
        setColor("black");
    }
  }, [hasLower, hasNumber, hasSpecial, hasUpper, password]);
  return (
    <div>
      <p className={style.message} style={{ color }}>
        {message}
      </p>
    </div>
  );
}
