import { ContactProps } from "@/pages/contact";

export const getMains = async () => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
            query GetHome {
                home(order_by: {id: asc}) {
                  id
                  title
                  content
                  media
                  slug
                }
                article(limit: 3, order_by: {id: desc}) {
                  desc
                  id
                  media
                  title
                }
              }        
            `
    }),
  });
  const json = await response.json();
  return json?.data;
};

export const getFoods = async () => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
            query GetFood {
              food {
                id
                media
                title
              }
            }       
            `
    }),
  });
  const json = await response.json();
  return json?.data?.food;
};

export const getFoodsById = async (id: number) => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
          query GetFood($id: Int) {
              food(where: {id: {_eq: $id}}) {
                id
                desc
                title
                content
                ingredients
                recipes
                time
                media
                media1
                created_at
                updated_at
                type
              }
            }
                  
        `,
      variables: {
        id,
      },
    }),
  });
  const json = await response.json();
  return json?.data?.food[0];
};

export const getArticles = async () => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
          query GetArticle {
              article {
                  id
                  content
                  content1
                  content2
                  desc
                  media
                  media1
                  media2
                  title
                  title1
                  title2
                  type
                  created_at
                  updated_at
              }
            }
                  
          `
    }),
  });
  const json = await response.json();
  return json?.data?.article;
};


export const getَArticleById = async (id: number) => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
          query GetArticle($id: Int) {
              article(where: {id: {_eq: $id}}) {
                id
                content
                content1
                content2
                desc
                media
                media1
                media2
                title
                title1
                title2
                type
                created_at
                updated_at
              }
            }
                  
        `,
      variables: {
        id,
      },
    }),
  });
  const json = await response.json();
  return json?.data?.article[0];
};


export const postContact = async (data: ContactProps) => {
  const response = await fetch(`https://sabberdeveloper.hasura.app/v1/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
          mutation InsertMessage($name: String, $phone: String, $text: String) {
              insert_message(objects: {name: $name, phone: $phone, text: $text}) {
                affected_rows
                returning {
                  id
                  name
                  phone
                  text
                }
              }
            }      
        `,
      variables: {
        name: data.name,
        phone: data.phone,
        text: data.text
      },
    }),
  });
  const json = await response.json();
  return json;
};
