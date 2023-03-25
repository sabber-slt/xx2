import { Formdata } from "../pages/auth/register";

export const postRegister = async (item: Formdata) => {
    const response = await fetch(
        "https://sabberdeveloper.hasura.app/v1/graphql",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Hasura-Role": "public",
            },
            body: JSON.stringify({
                query: `
            mutation InsertUser($age: String, $gender: String, $height: String, $name: String, $phone: String, $weight: String) {
                insert_user(objects: {age: $age, gender: $gender, height: $height, name: $name, phone: $phone, weight: $weight}) {
                  affected_rows
                  returning {
                    id
                    age
                    gender
                    height
                    name
                    phone
                    weight
                  }
                }
              }
                    
          `,
                variables: {
                    name: item.name,
                    phone: item.phone,
                    weight: item.weight,
                    height: item.height,
                    age: item.age,
                    gender: item.gender,
                },
            }),
        }
    );
    const json = await response.json();
    return json?.data?.insert_user?.returning[0];
};

export const postLogin = async (phone: string) => {
    const response = await fetch(
        "https://sabberdeveloper.hasura.app/v1/graphql",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Hasura-Role": "public",
            },
            body: JSON.stringify({
                query: `
            query MyQuery($phone: String) {
              user(where: {phone: {_eq: $phone}}) {
                age
                gender
                height
                id
                name
                phone
                weight
              }
            }
                    
          `,
                variables: {
                    phone,
                },
            }),
        }
    );
    const json = await response.json();
    return json?.data?.user[0];
};

export const getPlans = async (user_id: number) => {
    const response = await fetch(
        "https://sabberdeveloper.hasura.app/v1/graphql",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Hasura-Role": "public",
            },
            body: JSON.stringify({
                query: `
                query GetPlans($user_id: Int) {
                    plans(where: {user_id: {_eq: $user_id}}) {
                      id
                      dietP
                      exerciseP
                      videoP
                      user_id
                    }
                  }                   
          `,
                variables: {
                    user_id,
                },
            }),
        }
    );
    const json = await response.json();
    return json?.data?.plans;
};