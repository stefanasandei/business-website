"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const router = useRouter();

    const login = useMutation((credentials: { user: string, password: string }) => {
        return axios.post("/api/auth", credentials, {
            withCredentials: true
        });
    })

    const formSchema = z.object({
        user: z.string().min(2).max(50),
        password: z.string().min(4).max(10),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            user: "",
            password: ""
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const res = await login.mutateAsync(values);
            if (res.status == 200) {
                alert("Logged in! please refresh");
                router.push("/admin");
            } else {
                alert("Login failed!");
            }
        } catch {
            alert("Login failed!");
        }
    }

    return <main className="grid content-center h-[100vh] bg-secondary">
        <div className="container flex-1 shadow-md p-5 rounded-md bg-background max-w-2xl">
            <h1 className="font-bold text-3xl mb-5">Admin login</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="user"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>User</FormLabel>
                                <FormControl>
                                    <Input placeholder="Type your username here" autoComplete="username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="*****" type="password" autoComplete="current-password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </Form>
        </div>
    </main>;
}
