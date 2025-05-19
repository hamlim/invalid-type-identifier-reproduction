import { Link } from "waku";

export default async function HomePage() {
  return (
    <div>
      <title>Invalid Type Identifier Reproduction</title>
      <h1 className="text-4xl font-bold tracking-tight">
        Invalid Type Identifier Reproduction
      </h1>
      <Link to="/1234" className="mt-4 inline-block underline">
        Go to /1234
      </Link>
    </div>
  );
}

export async function getConfig() {
  return {
    render: "dynamic",
  } as const;
}
