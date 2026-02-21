"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";

export function FranchiseForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    investmentCapacity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Franchise application:", form);
    alert(
      "Thank you! Your application has been received. We will contact you shortly."
    );
    setForm({
      name: "",
      phone: "",
      city: "",
      investmentCapacity: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="investmentCapacity">Investment Capacity</Label>
        <select
          id="investmentCapacity"
          name="investmentCapacity"
          value={form.investmentCapacity}
          onChange={handleChange}
          required
          className="flex h-11 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wow-magenta focus-visible:ring-offset-2"
        >
          <option value="">Select range</option>
          <option value="10-12">₹10–12 Lakhs (Bloom)</option>
          <option value="15-18">₹15–18 Lakhs (Rise)</option>
          <option value="22-25">₹22–25 Lakhs (Signature)</option>
          <option value="exploring">Still exploring</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your interest and community..."
          value={form.message}
          onChange={handleChange}
          rows={4}
        />
      </div>
      <Button type="submit" size="lg" className="w-full">
        Submit
      </Button>
    </form>
  );
}
