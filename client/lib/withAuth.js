"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/login");
      }
    }, [status, router]);

    if (status === "loading") {
      return <div>Loading...</div>;
    }

    if (status === "authenticated") {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  AuthWrapper.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;
  return AuthWrapper;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;