import LayoutAdmin from "../../components/admin/LayOutAdmin"
import HijabByMerk from "../../components/admin/HijabByMerk"
import DataHijab from "../../components/admin//DataHijab"

const datahijab = ({data}) =>{
        {Array.isArray(data) ? data : data = [data]}
    return(
        <LayoutAdmin>
            <HijabByMerk/>
            <DataHijab data = {data}/>
        </LayoutAdmin>
    )
}

export async function getServerSideProps({query}){
    const nim = query.nim;
    let url = `http://localhost:5000/hijab`
    if (typeof nim === 'string'){
        url = `http://localhost:5000/hijab/${nim}`
    }
    //fetch data
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datahijab;