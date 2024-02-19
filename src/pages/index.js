// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Counter from "@/pages/components/queueUpdates";
import RequestTracker from "@/pages/qcomps/shoppingCart";
import Scoreboard from "@/pages/qcomps/updObjectsForm";
import List from "@/pages/components/artistsArr";
import List from "@/pages/qcomps/artistsRemoveArr";
import BucketList from "@/pages/qcomps/arrObj";

export default function Home() {
  return (
    <div className={styles.main}>
        <BucketList />
    </div>
  )
}
