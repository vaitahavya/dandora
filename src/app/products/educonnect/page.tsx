import type { Metadata } from "next";
import { EduConnectPage } from "@/components/products/EduConnectPage";

export const metadata: Metadata = {
  title: {
    absolute: "EduConnect — Smart School Management · a dandora.online product",
  },
  description:
    "EduConnect is dandora.online's school ERP and parent-communication platform — attendance, fees, academics, and parent engagement in one connected system. Built for Indian schools, CBSE & State board ready.",
};

export default function EduConnectProductPage() {
  return <EduConnectPage />;
}
