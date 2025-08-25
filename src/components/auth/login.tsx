"use client";

import { useState, useId } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimationWrapper from "../common/AnimationWrapper";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginDesign() {
  const [showPassword, setShowPassword] = useState(false);
  const emailId = useId();
  const passwordId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Form Data:", data);
  };

  return (
    <AnimationWrapper
      animation="fade-right"
      delay={0.1}
      className="mx-auto w-full max-w-[650px]"
    >
      <div className="flex flex-col items-start space-y-8">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hey! Welcome back
          </h1>
          <p className="text-gray-600">Sign In to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
          <div className="space-y-4">
            {/* Email field */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="w-5 h-5" />
              </span>
              <Input
                id={emailId}
                type="email"
                placeholder="Email"
                className="w-full border-2 rounded-[32px] py-6 pl-12 pr-4 border-gray-200 bg-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-100"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </span>
                <Input
                  id={passwordId}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border-2 rounded-[32px] py-6 pl-12 pr-12 border-gray-200 bg-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-100"
                  {...register("password", { required: "Password is required" })}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </Button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Sign in button */}
          <Button
            type="submit"
            className="w-full h-12 lg:bg-amber-400 bg-white lg:hover:bg-amber-400/80 lg:text-white text-black cursor-pointer hover:bg-gray-50 font-medium rounded-[32px]"
          >
            Log In
          </Button>
        </form>
      </div>
    </AnimationWrapper>
  );
}
