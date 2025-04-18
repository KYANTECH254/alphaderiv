"use server";
import { cookies } from "next/headers";

export async function getCookies() {
  const cookieStore = cookies(); 
  const userToken = (await cookieStore).get("userToken");
  return userToken?.value || null; 
}

export async function deleteCookie() {
  (await cookies()).set("userToken", "", { maxAge: -1 }); 
}
