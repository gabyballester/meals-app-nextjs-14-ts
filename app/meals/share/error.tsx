"use client";

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error.message}. Please try again.</p>
    </main>
  );
}
