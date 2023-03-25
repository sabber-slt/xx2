import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface UserProps {
    id: number;
    name: string;
    phone: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
}
interface SetUser {
    user: UserProps | null;

    setUser: (user: UserProps) => void;
    removeUser: () => void;
}

const useAuth = create<SetUser>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                setUser: (user) => set({ user }),
                removeUser: () => set({ user: null }),
            }),

            {
                name: "auth",
            }
        )
    )
);

export default useAuth;