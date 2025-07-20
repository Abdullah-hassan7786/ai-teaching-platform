"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { subjects } from "@/constants";
import {createCompanion} from "@/lib/actions/companion.actions";
import {redirect} from "next/navigation";

// Zod validation schema
const formSchema = z.object({
    name: z.string().min(1, { message: "Companion name is required." }),
    subject: z.string().min(1, { message: "Subject is required." }),
    topic: z.string().min(1, { message: "Topic is required." }),
    voice: z.string().min(1, { message: "Voice is required." }),
    style: z.string().min(1, { message: "Style is required." }),
    duration: z.coerce.number().min(1, { message: "Duration is required." }),
});

const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15,
        },

    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const companion = await createCompanion(values);
        if(companion) {
            redirect(`/companions/${companion.id}`);
        }
       else{
        console.error('failed to create companion');
            redirect('/');
    }}

        return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    {/* Companion Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Companion Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Neura the Brainy Explorer" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Subject */}
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input captialize">
                                            <SelectValue placeholder="Select the subject"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {subjects.map((subject) => (
                                                <SelectItem value={subject}
                                                            key={subject}
                                                            className="capitalize"
                                                >
                                                    {subject}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Topic */}
                    <FormField
                        control={form.control}
                        name="topic"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>What subject should the companion help with</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="e.g. Derivates and Integrals" {...field}/>
                                </FormControl>

                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Voice */}
                    <FormField
                        control={form.control}
                        name="voice"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Voice</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input">
                                            <SelectValue placeholder="Select the voice"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="male">
                                                Male
                                            </SelectItem>
                                            <SelectItem value="female">
                                                Female
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>

                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />


                    {/* Style */}
                    <FormField
                        control={form.control}
                        name="style"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Style</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input">
                                            <SelectValue placeholder="Select the style"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="formal">
                                                Formal
                                            </SelectItem>
                                            <SelectItem value="casual">
                                                Casual
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>

                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Duration */}
                    <FormField
                        control={form.control}
                        name="duration"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Estimated Session duration in minutes</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="e.g. 15" {...field} />
                                </FormControl>

                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full cursor-pointer">Build Your Companion</Button>
                </form>
            </Form>
        );
        };

    export default CompanionForm;
