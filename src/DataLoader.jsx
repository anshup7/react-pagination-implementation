export default function DataLoader({ currentData, handleNext, handlePrev }) {
  let tableList = currentData.map((obj) => {
    return (
      <tr key={obj.id}>
        <td>{obj.id}</td>
        <td>{obj.name}</td>
      </tr>
    );
  });
  return (
    <>
      <table>
        <th>ID</th>
        <th>Name</th>
        {tableList}
      </table>
      <button onClick={handlePrev}>Previous</button>
      <br></br> <br></br>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
