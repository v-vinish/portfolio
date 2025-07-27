
"use client";

import React, { useState } from "react";
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    // Service ID, Template ID, Public Key from user
    const serviceID = "service_q0ffpah";
    const templateID = "cc784su";
    const publicKey = "ifoS_q1tHPyT4brhY";

    console.log("Sending with data:", templateParams);

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
          });
          setName('');
          setEmail('');
          setMessage('');
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error.text || error);
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
    <form onSubmit={sendEmail} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="from_name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="reply_to" type="email" placeholder="your@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message..." required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}
