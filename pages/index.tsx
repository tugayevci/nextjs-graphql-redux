
import { graphql, buildSchema } from "graphql";

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return "Hello world!";
    },
};

try {
    // Run the GraphQL query '{ hello }' and print out the response
    fetch("http://localhost:9002/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ query: `{
          pets {
            name
            image
          }
        }
        ` }),
    })
        .then((r) => r.json())
        .then((data) => console.log("data returned:", data));
} catch (error) {
    console.log("error", error);
}

export default function Home() {
    return <div>user list</div>;
}
