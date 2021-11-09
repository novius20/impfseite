import {useState} from "react";
import axios from "axios";

function FihrForm() {

  const [name, setName] = useState("");
  const [output, setOutput] = useState([]);

  var patientsRes = [];
  var patients = [];

  const search = async () => {
       await axios.get("https://hapi.fhir.org/baseR4/Patient?given=" + name)
          .then((response) => {
              patientsRes = response.data.entry;
          });
      
       if(patientsRes){
        for(const element of patientsRes){
          patients.push(element.resource);
        }
        }
       console.log(patients);
       setOutput(renderBody());
  }

  const makeString = (arr) => {
      var str = "";
      for(const element of arr){
          str += element + " ";
      }
      return str;
  }

  const renderBody = () => {
      return patients && patients.map(({ id, birthDate, gender, address, name, }) => {
          console.log(address);
          //console.log(name[0].family);
          return (
              <tr key={id}>
                  <td>{id}</td>
                  <td>{name && makeString(name[0].given)}</td>
                  <td>{name && name[0].family}</td>
                  <td>{address && address[0].text}</td>
                  <td>{birthDate}</td>
                  <td>{gender}</td>
              </tr>
          )
      })
  }

  return (
      <div>
          <div id="SearchField">
              <label>Gib einen Namen ein:
                  <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
              </label>
          </div>
          <div id="SearchButton">
              <button onClick={search}>Suchen</button>
          </div>
          <br></br>
          <div id="Output Table">
              <table>
                  <thead>
                  <tr>
                      <th>ID</th>
                      <th>Vorname</th>
                      <th>Nachname</th>
                      <th>Adresse</th>
                      <th>Geburtstag</th>
                      <th>Geschlecht</th>
                  </tr>
                  </thead>
                  <tbody>
                      {output}
                  </tbody>
              </table>
          </div>
      </div>
  );
}


export default FihrForm;
