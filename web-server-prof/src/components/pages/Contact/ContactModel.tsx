/******************************************************************************
 * contactModel.tsx
 *****************************************************************************/
const BASE_URL = process.env.REACT_APP_API_BASE;

export const contactModel = async (data: any) => {

  const res = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.detail || "サーバーエラーが発生しました");
  }

  return res.json();
};
