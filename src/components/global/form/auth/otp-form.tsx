import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
type Props = {
  form: UseFormReturn<
    {
      email: string;
      password: string;
      otp: string;
    },
    undefined
  >;
};

const OTPForm = ({ form }: Props) => {
  return (
    <div className="flex items-center flex-col justify-center w-full gap-5">
      <p>You will probably get an OTP in your Registered Email Address. </p>

      <FormField
        control={form.control}
        name="otp"
        render={({ field }) => (
          <FormItem className="mt-4">
            <FormControl>
              <InputOTP
                maxLength={6}
                value={field.value}
                onChange={(val) => form.setValue("otp", val)}
              >
                <InputOTPGroup>
                  {Array(6)
                    .fill(null)
                    .map((_, index) => (
                      <InputOTPSlot
                        className="w-14 bg-background"
                        key={index}
                        index={index}
                        {...field}
                      >
                        <InputOTPSeparator />
                      </InputOTPSlot>
                    ))}
                </InputOTPGroup>
              </InputOTP>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <br />
      <span className="text-sm text-white/10 text-center">
        Make Sure you will get the OTP in your Admins Email Address not in
        Entered Email Address.
      </span>
    </div>
  );
};

export default OTPForm;
