
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
                            <td>{mhs.merk}</td>
                            <td>{mhs.ukuran}</td>
                            <td>{mhs.warna}</td>
                            <td>{mhs.harga}</td>
                        </tr>
                    ))}
                </tbody>
           </table>
       </div>
    )
}

export default DataHijab;