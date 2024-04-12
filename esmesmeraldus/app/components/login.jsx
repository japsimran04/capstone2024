import React from "react";
import Signup from "./signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className="login">
            <h1>Log in</h1>
            <div className="center-login">
            <form>
                <FormGroup label="Your email" htmlFor="email" type="email" placeholder="name@flowbite.com" required={true} />
                <FormGroupWithPopover
                    label="Your password"
                    htmlFor="password"
                    type="password"
                    required={true}
                />
                <div className="flex items-start mb-6">
                    <RememberMeCheckbox />
                </div>
                <SubmitButton label="Log-In" />
            </form>
            <p>Don't have an account?</p><button onClick={() => handleNavigation("/signup")}>Sign Up</button>
        <Routes>
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
        </div>
    );
}

function FormGroup({ label, htmlFor, type, placeholder, required }) {
    return (
        <div className="mb-6">
            <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                type={type}
                id={htmlFor}
                className="input-style"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

function FormGroupWithPopover({ label, htmlFor, type, required }) {
    return (
        <div className="mb-6 relative">
            <FormGroup label={label} htmlFor={htmlFor} type={type} required={required} />
            <PasswordPopover />
        </div>
    );
}

function PasswordPopover() {
    return (
        <div className="popover-style">
            
            {/* <h3 className="font-semibold">Must have at least 6 characters</h3>
            <div className="grid grid-cols-4 gap-2">
                <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
            </div>
            <p>It’s better to have:</p>
            <ul>
                <li className="flex items-center mb-1">
                    <svg className="icon-style" viewBox="0 0 16 12">
                        <path d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    Upper & lower case letters
                </li>
                <li className="flex items-center mb-1">
                    <svg className="icon-style" viewBox="0 0 14 14">
                        <path d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    A symbol (#$&)
                </li>
                <li className="flex items-center">
                    <svg className="icon-style" viewBox="0 0 14 14">
                        <path d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    A longer password (min. 12 chars.)
                </li>
            </ul> */}
        </div>
    );
}

function RememberMeCheckbox() {
    return (
        <div className="flex items-center h-5">
            <input
                id="remember"
                type="checkbox"
                className="checkbox-style"
                required
            />
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
            </label>
        </div>
    );
}

function SubmitButton({ label }) {
    return (
        <button type="submit" className="button-style"> {label}</button>
    );
}
