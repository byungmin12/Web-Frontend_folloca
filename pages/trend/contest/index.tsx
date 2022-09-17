import type { NextPage } from 'next'import {useRouter} from "next/router";import {useLocationStore} from "../../../states/zustandTestState";const Contest: NextPage = () => {    const router = useRouter();    const {setNewLocation} = useLocationStore()    return (        <div>            Contest index page            <button onClick={()=>{                router.push("/trend/contest/3")                setNewLocation("contest/3")            }}>공모</button>            <button onClick={()=>{                router.push("/trend/contest/5")                setNewLocation("contest/5")            }}>공모</button>            <button onClick={()=>{                router.push("/trend/contest/2")                setNewLocation("contest/2")            }}>공모</button>        </div>    )}export default Contest