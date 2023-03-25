import Loading from "@/components/anims/Loading";
import Input from "@/components/forms/Input";
import { postRegister } from "@/hooks/useUser";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../store/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export interface Formdata {
    name: string;
    phone: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
}

const Register = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [gender, setGender] = useState("woman");
    const [loading, setLoading] = useState(false);
    const { setUser, user } = useAuth();
    const { register, handleSubmit } = useForm<Formdata>();

    useEffect(() => {
        if (user !== null) {
            router.push("/panel");
        }
    }, [router, user]);

    const onSubmit = async (data: Formdata) => {
        setLoading(true);
        const item = {
            name: data.name,
            phone: data.phone,
            weight: data.weight,
            height: data.height,
            age: data.age,
            gender,
        };
        const res = await postRegister(item);
        console.log(res);
        if (res === undefined) {
            setMessage("شماره تلفن قبلا ثبت شده!");
        } else {
            setUser(res);
            router.push("/panel");
        }
        setLoading(false);
    };
    return (
        <div className="w-full min-h-screen vstack justify-center">
            <p className="font-bold text-sm text-center mb-2 text-pink">
                {message}
            </p>
            {loading ? (
                <Loading />
            ) : (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-80 py-5 bg-white rounded-lg vstack justify-center shadow-xl"
                >
                    <>
                        <Input
                            cls="w-64 h-12 bg-neutral-100 pr-2"
                            register={register("name")}
                            txt="نام و نام خانوادگی"
                            type="text"
                        />
                        <Input
                            cls="w-64 h-12 bg-neutral-100 pr-2"
                            register={register("phone")}
                            txt="شماره تماس"
                            type="number"
                        />
                        <div className="w-64 hstack justify-between">
                            <Input
                                cls="w-16 h-12 bg-neutral-100 pr-2"
                                register={register("weight")}
                                txt="وزن"
                                type="number"
                            />
                            <Input
                                cls="w-16 h-12 bg-neutral-100 pr-2"
                                register={register("height")}
                                txt="قد"
                                type="number"
                            />
                            <Input
                                cls="w-16 h-12 bg-neutral-100 pr-2"
                                register={register("age")}
                                txt="سن"
                                type="number"
                            />
                        </div>
                        <div className="w-64 hstack mt-5 font-bold">
                            <p>جنسیت</p>
                            <button
                                onClick={() => setGender("man")}
                                className={`mr-8 w-14 h-10 rounded-md shadow-lg hov center ${
                                    gender === "man"
                                        ? "bg-green-700"
                                        : "bg-neutral-100"
                                } ${
                                    gender === "man"
                                        ? "text-white"
                                        : "text-green-700"
                                }`}
                            >
                                مرد
                            </button>
                            <button
                                onClick={() => setGender("woman")}
                                className={`mr-3 w-14 h-10 rounded-md shadow-lg hov center ${
                                    gender === "woman"
                                        ? "bg-green-700"
                                        : "bg-neutral-100"
                                } ${
                                    gender === "woman"
                                        ? "text-white"
                                        : "text-green-700"
                                }`}
                            >
                                زن
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-32 h-10 font-bold text-sm bg-green-700 text-white center rounded-md shadow-lg hov mt-12"
                        >
                            ثبت نام
                        </button>
                    </>
                </form>
            )}
            <Link
                href="/auth/login"
                className="text-sm text-pink font-bold underline mt-8"
            >
                از قبل ثبت نام کرده اید؟ وارد شوید
            </Link>
        </div>
    );
};

export default Register;
