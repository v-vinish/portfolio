"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" disabled={isSubmitting} className="w-full">
      {isSubmitting ? "Sending..." : "Send Message"}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_q0ffpah",
        "template_48m2slc",
        formRef.current,
        "ifoS_q1tHPyT4brhY"
      )
      .then(
        () => {
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
          });
          formRef.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send the message, please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="user_name" placeholder="Your Name" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="user_email" type="email" placeholder="your@email.com" required />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message..." required rows={5} />
      </div>
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}
