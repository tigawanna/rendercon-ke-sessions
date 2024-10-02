import { useDebouncedValue } from "@/utils/hooks/use-debouncer";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { useTransition, useState, useEffect } from "react";

export function useSessionsSearch() {
  const { session } = useSearch({ from: "/sessions/" });
  const navigate = useNavigate({ from: "/sessions" });
  const [_, startTransition] = useTransition();

  const [keyword, setKeyword] = useState(session ?? "");
  const { debouncedValue, isDebouncing } = useDebouncedValue(keyword, 2000);
  useEffect(() => {
    if (session !== debouncedValue) {
      startTransition(() => {
        navigate({
          search: {
            session: debouncedValue,
          },
        });
      });
    }
  }, [debouncedValue]);
  return { debouncedValue, isDebouncing, keyword, setKeyword };
}
