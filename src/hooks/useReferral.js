import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useReferral() {
  const router = useRouter();
  const [refId, setRefId] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const searchRef = router.query?.ref;

    if (searchRef?.length > 0 && window.localStorage) {
      window.localStorage.setItem("runpodReferralId", searchRef);
      router.replace({ search: "" }, null, { shallow: true });
    }

    if (window.localStorage) {
      const referralId = window.localStorage.getItem("runpodReferralId");
      setRefId(referralId);

      // if (process.env.NEXT_PUBLIC_DEV && referralId !== "runpod")
      //   window.location.replace(
      //     "https://www.runpod.io" + window.location.pathname
      //   );
    }
  }, [router]);

  return true;
  // if (process.env.NEXT_PUBLIC_DEV && refId !== "runpod") {
  //   return false;
  // } else {
  //   return true;
  // }
}
