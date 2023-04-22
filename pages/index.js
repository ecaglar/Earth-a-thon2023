import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>index</h1>
      <Link href="/login">Login</Link> <br />
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
