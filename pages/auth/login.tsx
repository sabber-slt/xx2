import Loading from "@/components/anims/Loading";
import Input from "@/components/forms/Input";
import { postLogin, postRegister } from "@/hooks/useUser";
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

const Login = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");
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
        const res = await postLogin(data.phone);
        if (!res) {
            setMessage("شماره تلفن یافت نشد!");
        } else {
            setUser(res);
            router.push("/panel");
        }
        setLoading(false);
    };
    return (
        <div className="w-full h-screen vstack justify-center">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <p className="font-bold text-sm text-center mb-2 text-pink">
                        {message}
                    </p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-80 py-5 bg-white rounded-lg vstack justify-center shadow-xl"
                    >
                        <Input
                            cls="w-64 h-12 bg-neutral-100 pr-2"
                            register={register("phone")}
                            txt="شماره تماس"
                            type="number"
                        />
                        <button
                            type="submit"
                            className="w-32 h-10 font-bold text-sm bg-green-700 text-white center rounded-md shadow-lg hov mt-8"
                        >
                            ارسال
                        </button>
                    </form>
                    <Link
                        href="/auth/register"
                        className="text-sm text-green-700 font-bold underline mt-5"
                    >
                        عضو آواکادو نیستید ؟ ثبت نام کنید
                    </Link>
                </>
            )}
        </div>
    );
};

export default Login;
