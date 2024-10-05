"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

const withAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const router = useRouter();
    const accessToken = Cookies.get("authToken");

    useEffect(() => {
      if (!accessToken) {
        router.push("/login");
      }
    }, [accessToken, router]);

    if (!accessToken) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  AuthWrapper.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;
  return AuthWrapper;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;