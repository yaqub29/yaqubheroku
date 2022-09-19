export const MahasiswaForm = (props) => {
  return (
    <div className="card p-3 shadow bg-warning text-black">
      <div className="card-body">
        {props.isEdit ? (
          <h4 className="bg-black text-white text-center">TABLE EDIT MAHASISWA {props.mahasiswa.name}</h4>
        ) : (
          <h4 className="bg-black text-white text-center">TABLE INPUT MAHASISWA</h4>
        )}
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">NIK</label>
            <input
              type="text"
              name="nik"
              value={props.mahasiswa.nik || ""}
              className="form-control"
              onChange={props.handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Nama</label>
            <input
              type="text"
              name="name"
              value={props.mahasiswa.name || ""}
              className="form-control"
              onChange={props.handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Jurusan</label>
            <select
              className="form-select"
              name="jurusan"
              onChange={props.handleChange}
              value={props.mahasiswa.jurusan || ""}
            >
              <option value="">Pilih Jurusan</option>
              {props.data.jurusan.map((val, index) => (
                <option key={index}>{val}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Status</label>
            <select
              className="form-select"
              name="status"
              onChange={props.handleChange}
              value={props.mahasiswa.status || ""}
            >
              <option value="">Pilih Status</option>
              {props.data.status.map((val, index) => (
                <option key={index}>{val}</option>
              ))}
            </select>
          </div>
          {props.isEdit ? (
            <>
              <button type="submit" className="btn btn-danger">
                EDIT
              </button>

              &nbsp;
              <button
                onClick={props.handleCancelEdit}
                type="submit"
                className="btn btn-danger">
                BACK
              </button>

              &nbsp;
              <button
                onClick={props.handleRemove}
                type="submit"
                className="btn btn-danger">
                REMOVE
              </button>
            </>
          ) : 
          (
            <button type="submit" className="btn btn-danger">
              INPUT
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export const MahasiswaTable = (props) => {
  return (
    <div className="card p-3 shadow bg-warning text-black">
      <div className="card-body ">
        <h3 className="bg-black text-white text-center">TABLE LIST MAHASISWA</h3>
        <table className="table text-black">
          <thead>
            <tr>
              <th>NIK</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.mahasiswaList.map((mahasiswa, index) => (
              <tr
                key={index}
                onClick={() => props.getMahasiswa(mahasiswa, index)}
                style={{ cursor: "pointer" }}
              >
                <td>{mahasiswa.nik}</td>
                <td>{mahasiswa.name}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>{mahasiswa.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
