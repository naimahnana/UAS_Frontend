import Link from "next/link";
const DataHijab = ({data}) =>{
    return(
       <div className='container'>
           <h3>Data Hijab</h3>
           <table className = "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Merk</th>
                        <th>Ukuran</th>
                        <th>Warna</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((hjb,idx)=>(
                        <tr key = {idx}>
                            <td>{hjb.merk}</td>
                            <td>{hjb.ukuran}</td>
                            <td>{hjb.warna}</td>
                            <td>{hjb.harga}</td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <Link href={`/admin/updatehijab?merk=${hjb.merk}
                                                &ukuran=${hjb.ukuran}&warna=${hjb.warna}
                                                &harga=${hjb.harga}`}
                                    >
                                        <a>Edit</a>
                                    </Link>
                                </div>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
           </table>
       </div>
    )
}

export default DataHijab;