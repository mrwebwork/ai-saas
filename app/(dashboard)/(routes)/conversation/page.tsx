"use client";

//* Validation Schema
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./constants";

import Heading from "@/components/Heading";
import { Form } from "@/components/ui/form";

import { MessageSquare } from "lucide-react";

import { useForm } from "react-hook-form";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  //* Loading state with useForm

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TODO API request here
    console.log(values);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Heading
        title="Conversation"
        description="Unveiling Our Premier Conversational AI."
        Icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8 max-w-4xl mx-auto">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within grid grid-cols-12 gap-2"
            ></form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
