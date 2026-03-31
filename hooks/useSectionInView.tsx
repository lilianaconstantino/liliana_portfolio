"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";

export function useSectionInView(sectionName: string, threshold: number = 0.4) {
  const { setSectionInView } = useView();
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView) setSectionInView(sectionName);
  }, [inView, setSectionInView, sectionName]);

  return { ref, inView };
}
