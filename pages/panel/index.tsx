import React, { useState, useEffect } from "react";
import useAuth from "../../store/useAuth";
import { useRouter } from "next/router";
import {
    bmi,
    mensIdealCalories,
    normalWeight,
    womansIdealCalories,
} from "../../utils/calculate";
import Loading from "@/components/anims/Loading";
import ImgBlur from "@/components/images/ImgBlur";

type Props = {};

const Panel = (props: Props) => {
    const router = useRouter();
    const { user, removeUser } = useAuth();
    const [hydrate, setHydrate] = useState(false);
    const [bmiNum, setBmiNum] = useState<any>(0);
    const [idealW, setIdealW] = useState<any>(0);
    const [idealCal, setIdealC] = useState<number>(0);
    const [idealP, setIdealP] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [pkg, setPkg] = useState<any>();
    const [type, setType] = useState("loseWeight");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setHydrate(true);
        setBmiNum(bmi(user!));
        setIdealW(normalWeight(parseInt(user?.height!), user?.gender!));
        setIdealC(
            user?.gender === "man"
                ? mensIdealCalories(user!)
                : womansIdealCalories(user!)
        );
        setIdealP(parseInt(user?.weight!) * 0.8);
        if (user == null) {
            router.push("/auth/register");
        }
    }, [router, user]);

    const submit = async () => {
        setLoading(true);

        if (pkg !== undefined) {
            const api = await fetch("/api/zarinpal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    price,
                    id: user?.id,
                    phone: user?.phone,
                    pkg,
                    text,
                    type,
                }),
            });
            const json = await api.json();
            console.log(json);
            router.push(json.url);
        }
        setLoading(false);
    };
    if (!hydrate) {
        return null;
    }
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <ImgBlur
                        src={
                            user?.gender === "woman"
                                ? "/pics/girl.png"
                                : "/pics/boy.png"
                        }
                        alt="register"
                        size="100%"
                        pri={true}
                        cls="w-40 h-40 mt-20"
                    />
                </div>
            )}
        </div>
    );
};

export default Panel;
