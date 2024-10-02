import { useDebouncedValue } from "@/utils/hooks/use-debouncer";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { useTransition, useState, useEffect } from "react";

export function useSpeakersSearch() {
  const { speaker } = useSearch({ from: "/speakers/" });
  const navigate = useNavigate({ from: "/speakers" });
  const [_, startTransition] = useTransition();

  const [keyword, setKeyword] = useState(speaker ?? "");
  const { debouncedValue, isDebouncing } = useDebouncedValue(keyword, 2000);
  useEffect(() => {
    if (speaker !== debouncedValue) {
      startTransition(() => {
        navigate({
          search: {
            speaker: debouncedValue,
          },
        });
      });
    }
  }, [debouncedValue]);
  return { debouncedValue, isDebouncing, keyword, setKeyword };
}
