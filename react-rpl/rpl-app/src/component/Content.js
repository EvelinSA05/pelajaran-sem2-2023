function Content() {
  return (
    <div className="App">
      <h1>Jadwal Pelajaran</h1>
      <table border={"1px"}>
        <thead>
          <tr>
            <th>Senin</th>
            <th>Selasa</th>
            <th>Rabu</th>
            <th>Kamis</th>
            <th>Jum'at</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PBO</td>
            <td>Basis Data</td>
            <td>Basis Data</td>
            <td>PKWU</td>
            <td>B.Jerman</td>
          </tr>
          <tr>
            <td>Basis Data</td>
            <td>PBO</td>
            <td>BP/BK</td>
            <td>B.Inggris</td>
            <td>B.Daerah</td>
          </tr>
          <tr>
            <td>Matematika</td>
            <td></td>
            <td>PJOK</td>
            <td>B.Indo</td>
            <td>PPKN</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Matematika</td>
            <td>Basis Data</td>
            <td>PKWU</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Agama</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Content;
