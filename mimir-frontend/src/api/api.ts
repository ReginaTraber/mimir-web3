import { Card } from "../models/Card";

export const fetchCards = async (): Promise<Card[]> => {
  const response = await fetch("/api/cards");
  const dto = await response.json();
  if (response.ok) {
    return dto;
  }
  return [];
};