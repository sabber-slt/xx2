import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/forms/Input";
import { postContact } from "@/hooks/usePublic";
import Link from "next/link";
import ImgBlur from "../components/images/ImgBlur";
import Loading from "@/components/anims/Loading";

export interface ContactProps {
    name: string;
    phone: string;
    text: string;
}

const Contact = () => {
    const router = useRouter();
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm<ContactProps>();

    const onSubmit = async (data: ContactProps) => {
        setLoading(true);
        const res = await postContact(data);
        if (res) {
            setMessage(true);
        }
        setLoading(false);
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="w-full h-screen vstack justify-center">
                    {message ? (
                        <div className="w-80 py-5 bg-white rounded-lg vstack justify-center shadow-xl">
                            <p>پیام شما با موفقیت ارسال شد </p>
                            <Link
                                href="/"
                                className="w-36 h-9 bg-green-700 center font-bold text-white rounded-lg shadow-lg hov mt-5"
                            >
                                بازگشت
                            </Link>
                        </div>
                    ) : (
                        <>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="w-80 py-5 bg-white rounded-lg vstack justify-center shadow-xl"
                            >
                                <Input
                                    cls="w-64 h-12 bg-neutral-200 pr-2"
                                    register={register("phone")}
                                    txt="نام و نام خانوادگی"
                                    type="text"
                                />
                                <Input
                                    cls="w-64 h-12 bg-neutral-200 pr-2"
                                    register={register("phone")}
                                    txt="شماره تماس"
                                    type="number"
                                />
                                <textarea
                                    {...register("text")}
                                    className="w-64 h-64 bg-neutral-200 text-gray rounded-md mt-5 p-2"
                                    placeholder="متن خود را شرح دهید..."
                                />
                                <button
                                    type="submit"
                                    className="w-32 h-10 font-bold text-sm bg-green-700 text-white center rounded-md shadow-lg hov mt-8"
                                >
                                    ارسال
                                </button>
                            </form>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Contact;
