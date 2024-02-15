// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import List from "@/pages/qcomps/list_keys_id";
import RecipeList from "@/pages/qcomps/recipes";
import Button from "@/pages/components/button";
import MenuBar from "@/pages/qcomps/menuBar";
import Gallery from "@/pages/qcomps/state";
import PersonData from "@/pages/components/stateObj";
import Form from "@/pages/qcomps/stuckForm";

export default function Home() {
  return (
    <div className={styles.main}>
        <Form />
    </div>
  )
}
