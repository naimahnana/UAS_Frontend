import { useState } from "react";
const EventState = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pilHij, setPilHij] = useState("");
  
  return (
    <div className="container m-4">
      <div className="row">
        <div className="col-5">
          <h3>Form Penjualan</h3>
          <hr />
          <div className="mb-2">
            <label htmlFor="nama">Nama</label>
            <input
              className="form-control"
              type="text"
              name="nama"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="alamat">Alamat</label>
            <input
              className="form-control"
              type="text"
              name="alamat"
              id="alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="fs-5">
              Gender
            </label>

          </div>
          <div className="mb3">
            <label htmlFor="" className="fs-5">
              Pilihan Produk
            </label>
            <select
              name="pilihanProduk"
              id=""
              className="form-select"
              value={pilHij}
              onChange={(e) => setPilHij(e.target.value)}
            >
              <option value="Rabani">Rabani</option>
              <option value="Paris">Paris</option>
              <option value="BellaSquare">BellaSquare</option>
              <option value="Pasmina">Pasmina</option>
            </select>
          </div>
        </div>

        <div className="col-7">
          <h3>Resume</h3>
          <hr />
          <div>
            <h5 className="mt-5">Nama : {nama}</h5>
            <h5 className="mt-5">Alamat : {alamat}</h5>
            <h5 className="mt-5">Pilihan Hijab : {pilHij}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventState;
