import React, { useEffect, useState } from "react";
import axios from "axios";
import FullScreenLoader from "./FullScreenLoader";
const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD || "";

function Gate({ children }: React.PropsWithChildren<{}>) {
  const [password, setPassword] = useState("");
  const [granted, setGranted] = useState(false);
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const pw = localStorage.getItem("password") || "";
    setPassword(password);
    if (pw === PASSWORD) setGranted(true);
    setLoading(false);
  }, []);

  if (loading) {
    return <FullScreenLoader />;
  }

  const submit = async () => {
    setError("");
    axios
      .post("/api/gate", { password })
      .then(() => {
        localStorage.setItem("password", password);
        setGranted(true);
      })
      .catch((e) => {
        setError("Unauthorized");
      });
  };

  return granted ? (
    <>{children}</>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-96">
        <h1 className="text-4xl font-bold">Password Protected</h1>
        <p className="text-center">
          This site is password protected. Please enter the password to
          continue.
        </p>
        <input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className="w-full p-2 mt-4 border border-gray-300 rounded"
        />
        <button
          onClick={submit}
          className="w-full p-2 mt-4 text-white bg-blue-500 rounded"
        >
          Submit
        </button>
        {error.length > 0 && (
          <div className="mt-4 text-black text-sm flex p-1 rounded  bg-red-500  w-full justify-center shadow-md">
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gate;
