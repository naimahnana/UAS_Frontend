import { useRouter } from "next/router"

const merk = () =>{
    const sepatu = [
            {merk : 'Rabani', ukuran : 's,m,l'},
            {merk : 'Paris', ukuran : 's,m,l'},
            {merk : 'BellaSquare', ukuran : 's,m,l'},
            {merk : 'Pashmina', ukuran : 's,m,l'},
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {merk} = router.query;
    const data = hijab.find(m => m.merk == merk)
    return(
        <>
            <p>Merk : {merk}</p>
            <p>Ukuran : {data.ukuran}</p>
        </>
    )
}

export default merk;