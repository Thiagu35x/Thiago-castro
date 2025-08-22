import Image from "next/image";
import styles from "./page.module.css";
import { Profile } from "@/Components/Profile";

export default function Home() {
  return (
    <div>
      <h1>Site para disciplina de Front-End</h1>
     <Profile/>
       
    </div>
  );
}
